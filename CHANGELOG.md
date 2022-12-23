# Changelog

All notable changes to this project will be documented in this file.

## [3.0.0] - 23.12.2022

### Added

- Added type safety to all repository methods and the general data handling.

### Breaking Changes

- Removed the `any` type as a return value from the `repository` methods

### Upgrade Guide

You can get back the original behavior by adding the `any` type to the global `Entities` interface. You can
see the guide in Getting started → Installation → Adding types for Entities (TS only) → Using "any" fallback.

An additional package with auto-generated types will be released soon.

## [2.3.0] - 27.06.2022

### Added

- Added `ui.paymentOverviewCard`

## [2.1.0] - 20.05.2022

### Added

- Added `context.getModuleInformation`
- Added `window.routerPush`

## [2.0.0] - 16.05.2022

### Changed

- Changed `data.get` to `data.subscribe`

### Added

- Added `data.get`
- Added `data.handleGet`

## [1.0.0] - 12.05.2022

### Changed

- Changed default constructor values of Criteria.

### Added

- Added `setDefaultValues` function to Criteria.