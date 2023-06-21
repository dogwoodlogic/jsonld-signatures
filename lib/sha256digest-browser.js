/*
 * Copyright (c) 2021 Digital Bazaar, Inc. All rights reserved.
 */
/* eslint-env browser */
'use strict';
const crypto = globalThis && (globalThis.crypto || globalThis.msCrypto);

module.exports = {
  /**
   * Hashes a string of data using SHA-256.
   *
   * @param {string} string - the string to hash.
   *
   * @return {Uint8Array} the hash digest.
   */
  async sha256digest({string}) {
    const bytes = new TextEncoder().encode(string);
    return new Uint8Array(
      await crypto.subtle.digest('SHA-256', bytes)
    );
  }
};
