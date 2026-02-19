# TODO - style.css Fixes

## Issues Fixed:

- [x] 1. Add missing h3 styling in hero section
- [x] 2. Fix li.hide logic - properly handled in mobile media queries
- [x] 3. Add li.hide to mobile medium (481px-767px) media query

## Summary of Fixes:

### 1. Added h3 styling for hero section

The HTML has `<h3>` element inside `.heroPage .text` but there was no CSS for it. Added proper styling with:

- font-size: 16px
- font-weight: 400
- color: #555
- line-height: 1.8
- margin-top: 15px

### 2. Fixed li.hide in mobile medium (481px - 767px)

Added `header .container nav ul li.hide { display: block; }` to the mobile medium media query.

The logic now works correctly:

- Desktop (base): `li.hide { display: none; }` - hides contact in nav (correct, there's a separate contact button)
- Mobile small (max-width: 480px): `li.hide { display: block; }` - shows contact in mobile menu
- Mobile medium (481px-767px): `li.hide { display: block; }` - shows contact in mobile menu
