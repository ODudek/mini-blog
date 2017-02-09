function makeHash(...args) {
    let inputString = args.join('|');
    let hash = CryptoJS.MD5(inputString);
    return hash.toString(CryptoJS.enc.Base64);
}
