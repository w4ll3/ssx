# @spruceid/ssx-react

## 1.3.5

### Patch Changes

- Updated dependencies [5e90f6a]
- Updated dependencies [5c2f20c]
  - @spruceid/ssx@1.4.0

## 1.3.4

### Patch Changes

- Updated dependencies
  - @spruceid/ssx@1.3.2

## 1.3.3

### Patch Changes

- Updated dependencies [7d799b7]
  - @spruceid/ssx@1.3.1

## 1.3.2

### Patch Changes

- Updated dependencies [95dcfee]
- Updated dependencies [6f85eb7]
  - @spruceid/ssx@1.3.0

## 1.3.1

### Patch Changes

- eddc834: Updates the ssx-react package by removing the `watchAccount` method used to manage the account switching and added `useAccount` instead.
- Updated dependencies [c3a1930]
- Updated dependencies [ce89464]
- Updated dependencies [eddc834]
  - @spruceid/ssx-authjs@1.1.0
  - @spruceid/ssx-server@1.2.4

## 1.3.0

### Minor Changes

- 94a507a: Implements an event listener that prompts the user with a new sign in message when they change the selected account in their connected wallet

### Patch Changes

- @spruceid/ssx@1.2.5
- @spruceid/ssx-server@1.2.3

## 1.2.5

### Patch Changes

- Updated dependencies
  - @spruceid/ssx@1.2.4

## 1.2.4

### Patch Changes

- This updates the ssx-react package in order to improve compatibility between all wagmi/rainbow-kit versions.

## 1.2.3

### Patch Changes

- Updated dependencies [aa228bc]
  - @spruceid/ssx@1.2.3

## 1.2.2

### Patch Changes

- @spruceid/ssx@1.2.2
- @spruceid/ssx-server@1.2.2

## 1.2.1

### Patch Changes

- Patch fix for build issue
- Updated dependencies
  - @spruceid/ssx@1.2.1
  - @spruceid/ssx-server@1.2.1

## 1.2.0

### Minor Changes

- 6205fc4: Added support for Next-Auth to `ssx-react`. This includes helper functions for configuring the frontend and backend components of an app using Next-Auth.

## 1.1.1

### Patch Changes

- Updated dependencies [b25cbde]
  - @spruceid/ssx@1.1.1

## 1.1.0

### Minor Changes

- 1c685c8: This allows a for different web3 providers to be passed to the ssx-react instance. It still uses wagmi.sh as the default provider if none is passed.

### Patch Changes

- c989838: Refactor code to avoid duplication and improve performance.

  - Updates `ssxConfig?: SSXConfig;` on `SSXProviderProps` to `ssxConfig?: SSXClientConfig;` (non breaking change).

- Updated dependencies [c989838]
- Updated dependencies [c66f308]
- Updated dependencies [83c314c]
  - @spruceid/ssx@1.1.0

## 1.0.0

### Major Changes

- f317c82: Public release of the SSX SDK

### Patch Changes

- Updated dependencies [f317c82]
- Updated dependencies [a91af88]
- Updated dependencies [1072382]
  - @spruceid/ssx@1.0.0
