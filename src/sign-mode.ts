export enum SignMode {
  // SIGN_MODE_UNSPECIFIED specifies an unknown signing mode and will be
  // rejected
  SIGN_MODE_UNSPECIFIED = 0,

  // SIGN_MODE_DIRECT specifies a signing mode which uses SignDoc and is
  // verified with raw bytes from Tx
  SIGN_MODE_DIRECT = 1,

  // SIGN_MODE_TEXTUAL is a future signing mode that will verify some
  // human-readable textual representation on top of the binary representation
  // from SIGN_MODE_DIRECT
  SIGN_MODE_TEXTUAL = 2,

  // SIGN_MODE_LEGACY_AMINO_JSON is a backwards compatibility mode which uses
  // Amino JSON and will be removed in the future
  SIGN_MODE_LEGACY_AMINO_JSON = 127
}

export const SIGN_MODES = {
  [SignMode.SIGN_MODE_UNSPECIFIED]: 'SIGN_MODE_UNSPECIFIED',
  [SignMode.SIGN_MODE_DIRECT]: 'SIGN_MODE_DIRECT',
  [SignMode.SIGN_MODE_TEXTUAL]: 'SIGN_MODE_TEXTUAL',
  [SignMode.SIGN_MODE_LEGACY_AMINO_JSON]: 'SIGN_MODE_LEGACY_AMINO_JSON'
}
