import * as React from 'react';

function SvgPlaylistHeart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" {...props}>
      <path
        d="M12.273 1.305C11.583.463 10.636 0 9.606 0c-.77 0-1.474.273-2.094.813a4.622 4.622 0 00-.847.993 4.62 4.62 0 00-.847-.993C5.198.273 4.493 0 3.724 0c-1.03 0-1.977.463-2.667 1.305C.376 2.135 0 3.272 0 4.503 0 5.77.42 6.93 1.322 8.153c.807 1.095 1.967 2.205 3.31 3.492.458.439.978.937 1.518 1.467.142.14.325.218.515.218s.373-.077.515-.217c.54-.53 1.06-1.03 1.519-1.469 1.342-1.286 2.502-2.396 3.309-3.49.902-1.224 1.322-2.384 1.322-3.651 0-1.231-.376-2.367-1.057-3.198z"
        fill="#FFF"
      />
    </svg>
  );
}

export default SvgPlaylistHeart;
