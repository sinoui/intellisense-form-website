/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 51353:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(6113).randomBytes


/***/ }),

/***/ 37801:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const randombytes_1 = __importDefault(__webpack_require__(51353));
/**
 * @desc facade on wasm code.
 * @access private
 * @example
 * import RSASetup from 'wasm-rsa'
 * const rsaInstance = await RSASetup()
 */
class RSA {
    /** @ignore */
    constructor(wasm) {
        /** @ignore */
        this.publicInstance = new wasm.RSAPublicKeyPair();
        /** @ignore */
        this.privateInstance = new wasm.RSAPrivateKeyPair();
    }
    /**
     * @typedef {Object} RSAPrivate
     * @property {string} n - public piece rsa key
     * @property {string} e - public piece rsa key
     * @property {string} d - private piece rsa key
     * @property {Array} primes - array of big numbers which create key pair
     */
    /**
     * @typedef {Object} RSAPublic
     * @property {string} n - public piece rsa key
     * @property {string} e - public piece rsa key
     */
    /**
     * @desc Generate private key pair
     * @param {number} bits - count bits for create rsa keys.
     * @returns {RSAPrivate} - generated keys
     * @example
     * const { n, e, d, primes } = rsaInstance.generateRSAPrivate(2048)
     */
    generateRSAPrivate(bits) {
        if (typeof bits !== 'number') {
            throw new Error(`Invalid bits ${bits}`);
        }
        const randomSeed = randombytes_1.default(32).toString('hex');
        this.privateInstance.generate(bits, randomSeed);
        return {
            d: this.privateInstance.get_d(),
            n: this.privateInstance.get_n(),
            e: this.privateInstance.get_e(),
            primes: this.privateInstance.get_primes().split('_'),
        };
    }
    /**
     * @desc Generate private key pair from n, d, e, primes
     * @param {string} n - public piece rsa key
     * @param {string} d - private piece rsa key
     * @param {string} e - public piece rsa key
     * @param {Array} primes - array of big numbers which create key pair
     * @returns {RSAPrivate} - generated keys
     * @example
     * const privateKeys = rsaInstance.generateRSAPrivateFrom(n, d, e, primes)
     */
    generateRSAPrivateFrom(n, d, e, primes) {
        if (!n || !d || !e || !primes) {
            throw new Error('not all data for create keys');
        }
        if (primes.length === 0) {
            throw new Error('primes empty');
        }
        this.privateInstance.generate_from(n, d, e, primes.join('_'));
        return {
            primes,
            d: this.privateInstance.get_d(),
            n: this.privateInstance.get_n(),
            e: this.privateInstance.get_e(),
        };
    }
    /**
   * @desc Generate private key from pem key format
   * @param {string} key - private key in PEM format
   * @returns {RSAPublic} - generated keys
   * @example
   * const publicKey = rsaInstance.createRSAPrivateFromPEM(`-----BEGIN PRIVATE KEY-----
   * MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDD/UjzFPIp85KE
   * Ga4rhPYY0/8MszqrNHcyoogVXyg5MTXCee6nQPOk88HLsDM2KW7JBtvc2LDbzPVm
   * P6ZxqRsj03T3VrC4YOari460Jn9J6L4ueKvUagkxxF2XyaB7yuoblFmuTsZA98Zj
   * wAgfPA4G2PaeaxtdzWWXV4ehmGoXslKFzNnMSBLu/a+GROrWTT/5vg1jybXrppeD
   * cTeBBE+vbcv9k/Al7j6eIwCi0ObZYoEEET+3Et5hGv6w7qrH+Ds0MBhesSMmVLSm
   * vkEMaJxUcWGnIQazgghFjnFvnQkF57zJsMl/sTjm7QkA9IIxejPGvfgARbP1aAAv
   * UMtjpoULAgMBAAECggEABYwix3adUCCr0f9kFalCyfseKf7ct0HZ6d392hUCb3P8
   * IJAQ+Dz3aIDZyGkpWewcTaZbDMo5X09S1t0QWgE+Wmo+0k1q3R0pCkv98w1v5uim
   * kWwq+O0za2wydfxoBXj93V/6ldt28xnQTLx/vlqVzw3PFTbU5HfO21TH6wQEZL1D
   * rhEshddoU9a9qrqzsVFNLUiGHAvMR7YijagLl0t2LMSfeIt5qS4Rj7fCyXGzNNSx
   * 01h31IfVSUT1FdWTf+fRAYF20nupqejzLjRc5srNoTrQnK7otDFYFxiwb/E2/Dte
   * I6kIr5SgscOBoQizBPL/yINgWjWHYUrMRyX+EN2sqQKBgQDOtX4Zs4QDNFT7otjL
   * D1JNIY6bcic0P86XMq6LNSV5o6JmxNDMlPD/EjVAicjOxn1LYbnzIQyuzOVrNXm0
   * +QA8dsJMyQzzNO7o6t9lLtrG+CXBKP7wmVBb8mMWve0VKNeLZyOpbOamGC1P7mPp
   * JVoRh+8DAVzKPXlEaKXXLasZHwKBgQDyuWs8b/6wv1d8WGZoXYuCkL1l/ywNidZP
   * AeBys4FXdqN6luOuCIoMpu7sOzCT7exu5pz3toB74bwVGRsSlcp3LJirb8LN4U3o
   * jkD3Tp8Gn7f7pUE43ZphU8B25ebAMBgCC5V+77HVIlo8GmLFz0M5XAslWtZ6GMmr
   * XF3HhERalQKBgEejfN15aqIVq/I94PaXC8XxgFP9PvsLthSOmxFhzOgYPvtw8JBG
   * ejNcYxpH5lFLVzcd2m0ZoiSenFAIi3Kd7WgHHJWyBAvx527Pn7aYg3f7nlIQXDKU
   * X9ZN7et+zUDNE86bYy+fr1wW+vU9wGCX8lwrCTm4aikpHvMHdZpamHavAoGADYSq
   * JkmOg8WEV9aMjY94L6NkCQQ3LeHZX7kZCQpaT8a5wCAbOhwbpCy/7cQ2Jmb/3gVW
   * BK3TZhLiaMJnMZfKGO0Q66tjzBeaQTN7BssILFRE6O0BPuuIp5cEhxqyyU1kaOjA
   * QLuUyewJ3oMRsTaj5dPsgv4WJ+KtiK+yQWRqcikCgYAwRzXzsrGK2HpkER3sEXok
   * hydDHbuqKLuT2Cqe6wyBpJPq5MyMu/T7ANmAPtJK4nvQF5RQoGdTne6/lvvwNMf2
   * ullviEZz1ehunkmoU25CgAKLXXCMmw/T8GyX6UUIqofyFGHasj/vjA8ZIpdLyKVP
   * khSri8NDQTao0i43teKIMA==
   * -----END PRIVATE KEY-----`)
   */
    createRSAPrivateFromPEM(key) {
        if (!key) {
            throw new Error("empty key");
        }
        this.privateInstance.from_pkcs8_pem(key);
        return {
            d: this.privateInstance.get_d(),
            n: this.privateInstance.get_n(),
            e: this.privateInstance.get_e(),
            primes: this.privateInstance.get_primes().split('_'),
        };
    }
    /**
     * @desc Generate public keys from n, e
     * @param {string} n - public piece rsa key
     * @param {string} e - public piece rsa key
     * @returns {RSAPublic} - generated keys
     * @example
     * const publicKeys = rsaInstance.createRSAPublic(n, e)
     */
    createRSAPublic(n, e) {
        if (!n || !e || n.length < 1 || e.length < 1) {
            throw new Error(`Invalid params for create n: ${n} e: ${e}`);
        }
        this.publicInstance.create(n, e);
        return {
            n: this.publicInstance.get_n(),
            e: this.publicInstance.get_e(),
        };
    }
    /**
     * @desc Create public key from pem key format
     * @param {string} key - public key in PEM format
     * @returns {RSAPublic} - generated keys
     * @example
     * const publicKey = rsaInstance.createRSAPublicFromPEM(`-----BEGIN PUBLIC KEY-----
     * MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAw/1I8xTyKfOShBmuK4T2
     * GNP/DLM6qzR3MqKIFV8oOTE1wnnup0DzpPPBy7AzNiluyQbb3Niw28z1Zj+mcakb
     * I9N091awuGDmq4uOtCZ/Sei+Lnir1GoJMcRdl8mge8rqG5RZrk7GQPfGY8AIHzwO
     * Btj2nmsbXc1ll1eHoZhqF7JShczZzEgS7v2vhkTq1k0/+b4NY8m166aXg3E3gQRP
     * r23L/ZPwJe4+niMAotDm2WKBBBE/txLeYRr+sO6qx/g7NDAYXrEjJlS0pr5BDGic
     * VHFhpyEGs4IIRY5xb50JBee8ybDJf7E45u0JAPSCMXozxr34AEWz9WgAL1DLY6aF
     * CwIDAQAB
     * -----END PUBLIC KEY-----`)
     */
    createRSAPublicFromPEM(key) {
        if (!key) {
            throw new Error("empty key");
        }
        this.publicInstance.from_pkcs8_pem(key);
        return {
            n: this.publicInstance.get_n(),
            e: this.publicInstance.get_e(),
        };
    }
    /**
     * @desc Get private key pair
     * @returns {RSAPrivate} - private keys
     * @example
     * const { n, d, e, primes } = rsaInstance.getRSAPrivate()
     */
    getRSAPrivate() {
        const d = this.privateInstance.get_d();
        const n = this.privateInstance.get_n();
        const e = this.privateInstance.get_e();
        const primes = this.privateInstance.get_primes().split('_');
        if (d.length < 1 || n.length < 1 || e.length < 1) {
            throw new Error(`All rsa private keys not created d: ${d} n: ${n} e: ${e}`);
        }
        return { d, n, e, primes };
    }
    /**
     * @desc Get private primes
     * @returns {Array} - private primes
     * @example
     * const primes = rsaInstance.getPrivatePrimes()
     */
    getPrivatePrimes() {
        const primes = this.privateInstance.get_primes();
        return primes.split('_');
    }
    /**
     * @desc Get public keys
     * @returns {RSAPublic} - private keys
     * @example
     * const { n, e } = rsaInstance.getRSAPublic()
     */
    getRSAPublic() {
        const n = this.publicInstance.get_n();
        const e = this.publicInstance.get_e();
        if (n.length < 1 || e.length < 1) {
            throw new Error(`All rsa public keys not created n: ${n} e: ${e}`);
        }
        return { n, e };
    }
    /**
     * @desc sign message with private keys
     * @param {string} message - message for sign
     * @returns {string} - signature string
     * @example
     * const signature = rsaInstance.signMessage('hello')
     *
     * signature -> `5d21446e76ff38fe4688c1e7fd75c785d98cd7c5fabfd483c3cd27898d8e2931b176609bb5d28e5d6319c3e814ebcd96ae58
     * 2ab3984b5309678d421672635b3fd643e840a1efa2e9cba7d27afaeb8534ca6338bf73aa10864f3406f1c484a85012d1c1a9
     * 87398f28b75d8b79c521d548a944a4eaa1bfe56c0b715b43dede3d41`
     */
    signMessage(message) {
        if (typeof message !== 'string') {
            throw new Error('message should be a string');
        }
        return this.privateInstance.sign_message(message);
    }
    /**
     * @desc verify signature with public keys
     * @param {string} message - signature data
     * @param {string} signature - signature
     * @returns {boolean} - verify result
     * @example
     * const verify = rsaInstance.verify(
     *  'hello',
     *  `5d21446e76ff38fe4688c1e7fd75c785d98cd7c5fabfd483c3cd27898d8e2931b176609bb5d28e5d6319c3e814ebcd96ae58
     *   2ab3984b5309678d421672635b3fd643e840a1efa2e9cba7d27afaeb8534ca6338bf73aa10864f3406f1c484a85012d1c1a9
     *   87398f28b75d8b79c521d548a944a4eaa1bfe56c0b715b43dede3d41`
     * )
     *
     * verify -> true
     */
    verify(message, signature) {
        const verify = this.publicInstance.verify_message(message, signature);
        if (!verify) {
            throw new Error('Verify message is false');
        }
        return verify;
    }
    /**
     * @desc encryption message with public keys
     * @param {string} message - data for encrypt
     * @returns {string} - encrypted data
     * @example
     * const encryptedMessage = rsaInstance.publicEncrypt('hello')
     *
     * encryptedMessage -> `ca6e7d0571563b46b82a873c196e53d7322f2d5f510a5185d4a94b0ecbfea966160
     * d4b0be160684a5b9b0c2b6d429d331a950210e5545ee133793f604f417f93c63af4509db79f90a89d0c87c7c
     * 87dc6873a89575b0c985f8cc159bae781f88607c4ed8d2a6df4aac33c0ca91581debe50b7fef2fc76e71ad7c
     * e3c0191d7c1497199c2a317bd475a27988d71bfa5a33d23d1be19791a9bded0292836b0d10e5e4d7fa1bd092
     * 9f5cabdb6082f2882c12dadebe23b3682e625618cd5a57d9727eb06192ab4703277128771d193aa69ea30123
     * 409c7205827375c34d4c22544d09c1c128d8edd9124d62aa062f6642bd7e3e468888e1a78c7e80206361ef131ecee`
     */
    publicEncrypt(message) {
        if (!message) {
            throw new Error('message is not define');
        }
        const randomSeed = randombytes_1.default(32).toString('hex');
        return this.publicInstance.encrypt(message, randomSeed);
    }
    /**
     * @desc decrypt message with private keys
     * @param {string} encryptedMessage - data for dencrypt
     * @returns {string} - message
     * @example
     * const decryptMessage = rsaInstance.privateDecrypt(
     *  `ca6e7d0571563b46b82a873c196e53d7322f2d5f510a5185d4a94b0ecbfea966160
     *   d4b0be160684a5b9b0c2b6d429d331a950210e5545ee133793f604f417f93c63af4509db79f90a89d0c87c7c
     *   87dc6873a89575b0c985f8cc159bae781f88607c4ed8d2a6df4aac33c0ca91581debe50b7fef2fc76e71ad7c
     *   e3c0191d7c1497199c2a317bd475a27988d71bfa5a33d23d1be19791a9bded0292836b0d10e5e4d7fa1bd092
     *   9f5cabdb6082f2882c12dadebe23b3682e625618cd5a57d9727eb06192ab4703277128771d193aa69ea30123
     *   409c7205827375c34d4c22544d09c1c128d8edd9124d62aa062f6642bd7e3e468888e1a78c7e80206361ef131ecee`
     * )
     *
     * decryptMessage -> 'hello'
     */
    privateDecrypt(encryptedMessage) {
        if (!encryptedMessage) {
            throw new Error('message is not define');
        }
        return this.privateInstance.decrypt(encryptedMessage);
    }
    /**
     * @desc generate private key in PEM format
     * @returns {string} - key
     * @example
     * const privatePEM = rsaInstance.privateKeyToPEM()
     * console.log(privatePEM)
     * -----BEGIN RSA PRIVATE KEY-----
     * MIICXAIBAAKBgQCtelj+ptZ69rtp4unsbbRFygYpaZc0/GgRkJSwav891WjZk/dp
     * /J71s4cjJuKgbnN7wKt2ECoeBEzr/BAWc/y9dh1dLdSoHnl2LPVLindFRC3o7UZu
     * mogz4X1bxlb6lEh2TV04nrt9615e1+RS9zIBP0HGr2ZG4qhd58SH1NGSZQIDAQAB
     * AoGAAR1JFxGxTQbqu0pm4ErwHoamtXtlKkT40iwQmHWHgDkvvD4UF800pDVsB9DH
     * IeqzuTbKoy6FZr32VInA/LPwCrDSmeD2HNuGiwIjTvBl1QOnwG8KzfFSXHV3ZVn7
     * 4Gb4QEOdB8osPhi7uU+a6lksSudNLKoLUIX0YqD1aWQtMAECQQDdQXmfeJyeHRdI
     * nOAyseTLCzBoHJONoAVtbeyLt2colG7BzyDDxKanj9LsMtkdtLOVymHmvVUJHv2I
     * Lex1jSZlAkEAyLgxp+dninReelj7Bwk7FY2wIeb5/E3dE3brC6mtqVRrWh8tn1pm
     * yRWqH9mjJRv29DZZtJs41LpGoAUQX4X8AQJACobI8IteeC9OIkhEamUIS5i2rt1d
     * L8nDOFeYf3U0VTvqoRHnryi1/RbcpBwvNDiaqq+8RKwRVaPB0C7PJzCV+QJAMBZY
     * 5yX8W2JXxC4PLfdbLWW9ndGtcHHjFie2Vhv3nAq6kWPI1VWeLGzBTlIg0OIrPwTK
     * ZweNDQH3q5yq+IesAQJBANcdJLlwriLwzXnDeDbki/M/TUssiVGtCWLnrxwT1Yi8
     * IAxrYAWdS9Qb/EaZamqyMKizp9kyMSpPwWHhFSJtT58=
     * -----END RSA PRIVATE KEY-----
     */
    privateKeyToPEM() {
        return this.privateInstance.to_pkcs8_pem();
    }
    /**
     * @desc generate public key in PEM format
     * @returns {string} - key
     * @example
     * const publicPEM = rsaInstance.publicKeyToPEM()
     * console.log(publicPEM)
     * -----BEGIN RSA PUBLIC KEY-----
     * MIGJAoGBAK16WP6m1nr2u2ni6exttEXKBilplzT8aBGQlLBq/z3VaNmT92n8nvWz
     * hyMm4qBuc3vAq3YQKh4ETOv8EBZz/L12HV0t1KgeeXYs9UuKd0VELejtRm6aiDPh
     * fVvGVvqUSHZNXTieu33rXl7X5FL3MgE/QcavZkbiqF3nxIfU0ZJlAgMBAAE=
     * -----END RSA PUBLIC KEY-----
     */
    publicKeyToPEM() {
        return this.publicInstance.to_pkcs8_pem();
    }
}
exports["default"] = RSA;
RSA.IS_BROWSER = (typeof window !== 'undefined');
//# sourceMappingURL=Rsa.js.map

/***/ }),

/***/ 44140:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Rsa_1 = __importDefault(__webpack_require__(37801));
const wasm = __importStar(__webpack_require__(40862));
/**
 * @desc function for init rsa instance in node
 * @example
 * // Promise syntax
 * RSASetup().then(rsaInstance => {
 *    // code...
 * })
 *
 * // Async/Await syntax
 * const rsaInstance = await RSASetup()
 */
function RSASetup() {
    return new Promise((resolve) => resolve(new Rsa_1.default(wasm)));
}
exports["default"] = RSASetup;
//# sourceMappingURL=index.node.js.map

/***/ }),

/***/ 40862:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = __webpack_require__(73837);

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}
/**
*/
class RSAPrivateKeyPair {

    static __wrap(ptr) {
        const obj = Object.create(RSAPrivateKeyPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rsaprivatekeypair_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.rsaprivatekeypair_new();
        return RSAPrivateKeyPair.__wrap(ret);
    }
    /**
    * @param {number} bits
    * @param {string} random_seed
    */
    generate(bits, random_seed) {
        var ptr0 = passStringToWasm0(random_seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rsaprivatekeypair_generate(this.ptr, bits, ptr0, len0);
    }
    /**
    * @param {string} n
    * @param {string} d
    * @param {string} e
    * @param {string} primes
    */
    generate_from(n, d, e, primes) {
        var ptr0 = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(d, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ptr2 = passStringToWasm0(e, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len2 = WASM_VECTOR_LEN;
        var ptr3 = passStringToWasm0(primes, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len3 = WASM_VECTOR_LEN;
        wasm.rsaprivatekeypair_generate_from(this.ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    }
    /**
    * @param {string} message
    * @returns {string}
    */
    sign_message(message) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.rsaprivatekeypair_sign_message(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} ciphermessage
    * @returns {string}
    */
    decrypt(ciphermessage) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passStringToWasm0(ciphermessage, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            wasm.rsaprivatekeypair_decrypt(retptr, this.ptr, ptr0, len0);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    get_e() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsaprivatekeypair_get_e(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    get_d() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsaprivatekeypair_get_d(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    get_n() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsaprivatekeypair_get_n(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    get_primes() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsaprivatekeypair_get_primes(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    to_pkcs8_pem() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsaprivatekeypair_to_pkcs8_pem(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} data
    */
    from_pkcs8_pem(data) {
        var ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rsaprivatekeypair_from_pkcs8_pem(this.ptr, ptr0, len0);
    }
}
module.exports.RSAPrivateKeyPair = RSAPrivateKeyPair;
/**
*/
class RSAPublicKeyPair {

    static __wrap(ptr) {
        const obj = Object.create(RSAPublicKeyPair.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rsapublickeypair_free(ptr);
    }
    /**
    */
    constructor() {
        var ret = wasm.rsapublickeypair_new();
        return RSAPublicKeyPair.__wrap(ret);
    }
    /**
    * @param {string} n
    * @param {string} e
    */
    create(n, e) {
        var ptr0 = passStringToWasm0(n, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(e, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        wasm.rsapublickeypair_create(this.ptr, ptr0, len0, ptr1, len1);
    }
    /**
    * @param {string} message
    * @param {string} random_seed
    * @returns {string}
    */
    encrypt(message, random_seed) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            var ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len0 = WASM_VECTOR_LEN;
            var ptr1 = passStringToWasm0(random_seed, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            wasm.rsapublickeypair_encrypt(retptr, this.ptr, ptr0, len0, ptr1, len1);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} message
    * @param {string} signature
    * @returns {boolean}
    */
    verify_message(message, signature) {
        var ptr0 = passStringToWasm0(message, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        var ptr1 = passStringToWasm0(signature, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        var ret = wasm.rsapublickeypair_verify_message(this.ptr, ptr0, len0, ptr1, len1);
        return ret !== 0;
    }
    /**
    * @returns {string}
    */
    get_e() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsapublickeypair_get_e(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    get_n() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsapublickeypair_get_n(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {string}
    */
    to_pkcs8_pem() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.rsapublickeypair_to_pkcs8_pem(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @param {string} data
    */
    from_pkcs8_pem(data) {
        var ptr0 = passStringToWasm0(data, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rsapublickeypair_from_pkcs8_pem(this.ptr, ptr0, len0);
    }
}
module.exports.RSAPublicKeyPair = RSAPublicKeyPair;

module.exports.__wbg_new_693216e109162396 = function() {
    var ret = new Error();
    return addHeapObject(ret);
};

module.exports.__wbg_stack_0ddaca5d1abfb52f = function(arg0, arg1) {
    var ret = getObject(arg1).stack;
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbg_error_09919627ac0992f5 = function(arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
};

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = (__webpack_require__(71017).join)(__dirname, 'rsa_lib_bg.wasm');
const bytes = (__webpack_require__(57147).readFileSync)(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;



/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/wasm-rsa/lib/index.node.js
var index_node = __webpack_require__(44140);
var index_node_default = /*#__PURE__*/__webpack_require__.n(index_node);
;// CONCATENATED MODULE: external "buffer"
const external_buffer_namespaceObject = require("buffer");
;// CONCATENATED MODULE: ./src/rsa-tools/gen-key-pair.js
/**
 * 生成密钥对
 */const genKeyPair=async()=>{const rsa=await index_node_default()();const startTime=performance.now();const bits=2048;const privateKey=rsa.generateRSAPrivate(bits);rsa.createRSAPublic(privateKey.n,privateKey.e);const privateKeyString=rsa.privateKeyToPEM();const publicKeyString=rsa.publicKeyToPEM();console.log(`生成秘钥用时：${performance.now()-startTime} ms`);return{privateKey:privateKeyString,publicKey:publicKeyString};};/* harmony default export */ const gen_key_pair = (genKeyPair);
;// CONCATENATED MODULE: ./src/rsa-tools/rsa-tools.worker.js
/**
 * 处理器
 */const Handlers={"gen-key-pair":innerGenKeyPair,"get-public-key":getPublicKey,encrypto};onmessage=async event=>{const{data}=event;const type=data?.type;const id=data?.id;const handler=Handlers[type];if(handler){try{const response=await handler(data.request);postMessage({type,id,response});}catch(e){postMessage({type,id,error:true,exception:e});}}};let globalPublicKey="";/**
 * 生成密钥对
 */async function innerGenKeyPair(){const keypair=await gen_key_pair();globalPublicKey=keypair.publicKey;return keypair;}/**
 * 获取公钥
 *
 * @returns 公钥
 */function getPublicKey(){return globalPublicKey;}/**
 * 加密
 *
 * @param request
 * @returns
 */async function encrypto(request){const{publicKeyString,text}=request;const rsa=await index_node_default()();rsa.createRSAPublicFromPEM(publicKeyString);const endataHex=rsa.publicEncrypt(text);// wasm-rsa 加密后的密文采用 hex 编码，需要转成 base64 编码
const endata=external_buffer_namespaceObject.Buffer.from(endataHex,"hex");const endataBase64=endata.toString("base64");return endataBase64;}
})();

module.exports = __webpack_exports__;
/******/ })()
;