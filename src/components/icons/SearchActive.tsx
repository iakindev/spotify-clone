import * as React from 'react';

function SvgSearchActive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M16.738 16l4.429 5.19-1.524 1.298-4.417-5.178a8.341 8.341 0 01-4.726 1.428 8.337 8.337 0 01-3.304-.672 8.515 8.515 0 01-2.714-1.81 8.512 8.512 0 01-1.81-2.714A8.338 8.338 0 012 10.238c0-1.15.224-2.252.673-3.303a8.515 8.515 0 011.81-2.715 8.513 8.513 0 012.713-1.81 8.337 8.337 0 013.304-.672c1.15 0 2.252.224 3.303.673a8.513 8.513 0 012.715 1.81 8.514 8.514 0 011.81 2.714A8.334 8.334 0 0119 10.238 8.436 8.436 0 0116.738 16zm-6.238.738c.88 0 1.722-.173 2.524-.518a6.57 6.57 0 002.071-1.387 6.57 6.57 0 001.387-2.071A6.315 6.315 0 0017 10.238c0-.88-.173-1.722-.518-2.524a6.57 6.57 0 00-1.387-2.071 6.566 6.566 0 00-2.071-1.387 6.315 6.315 0 00-2.524-.518c-.88 0-1.722.173-2.524.518a6.567 6.567 0 00-2.071 1.387 6.569 6.569 0 00-1.387 2.071A6.314 6.314 0 004 10.238c0 .881.173 1.722.518 2.524a6.568 6.568 0 001.387 2.071c.58.58 1.27 1.042 2.071 1.387a6.316 6.316 0 002.524.518z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgSearchActive;
