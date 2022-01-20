'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

require('./shims-24e5b259.js');
var ./server/app.js = require('./server/app.js');
require('node:http');
require('node:https');
require('node:zlib');
require('node:stream');
require('node:util');
require('node:url');
require('net');

/**
 * @param {import('@sveltejs/kit').SSRManifest} manifest
 * @returns {import('@netlify/functions').Handler}
 */
function init(manifest) {
	const app = new ./server/app.js.App(manifest);

	return async (event) => {
		const { httpMethod, headers, rawUrl, body, isBase64Encoded } = event;

		const encoding = isBase64Encoded ? 'base64' : 'utf-8';
		const rawBody = typeof body === 'string' ? Buffer.from(body, encoding) : body;

		const rendered = await app.render(
			new Request(rawUrl, {
				method: httpMethod,
				headers: new Headers(headers),
				body: rawBody
			})
		);

		const partial_response = {
			statusCode: rendered.status,
			...split_headers(rendered.headers)
		};

		// TODO this is probably wrong now?
		if (rendered.body instanceof Uint8Array) {
			// Function responses should be strings (or undefined), and responses with binary
			// content should be base64 encoded and set isBase64Encoded to true.
			// https://github.com/netlify/functions/blob/main/src/function/response.ts
			return {
				...partial_response,
				isBase64Encoded: true,
				body: Buffer.from(rendered.body).toString('base64')
			};
		}

		return {
			...partial_response,
			body: await rendered.text()
		};
	};
}

/**
 * Splits headers into two categories: single value and multi value
 * @param {Headers} headers
 * @returns {{
 *   headers: Record<string, string>,
 *   multiValueHeaders: Record<string, string[]>
 * }}
 */
function split_headers(headers) {
	/** @type {Record<string, string>} */
	const h = {};

	/** @type {Record<string, string[]>} */
	const m = {};

	headers.forEach((value, key) => {
		if (key === 'set-cookie') {
			m[key] = value.split(', ');
		} else {
			h[key] = value;
		}
	});

	return {
		headers: h,
		multiValueHeaders: m
	};
}

exports.init = init;
