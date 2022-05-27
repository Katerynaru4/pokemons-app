import React, { useEffect, RefObject } from 'react';

export default function useOutsideClick(
  refs: Array<RefObject<HTMLElement> | undefined>,
  handler?: () => void,
) {
  useEffect(() => {
    function handleClickOutside(event: React.MouseEvent<HTMLElement>) {
      if (!handler) return;


      if (
        event.target === document.getElementsByTagName('html')[0] &&
        event.clientX >= document.documentElement.offsetWidth
      )
        return;

      let containedToAnyRefs = false;
      for (const rf of refs) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (rf && rf.current && (rf.current as any).contains(event.target)) {
          containedToAnyRefs = true;
          break;
        }
      }

      if (!containedToAnyRefs) {
        handler();
      }
    }

    document.addEventListener('mousedown', handleClickOutside as () => void);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside as () => void);
    };
  }, [refs, handler]);
}