import Drawer from "components/Drawer";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import breakpoints from "libs/breakpoints";
import { ReactNode, useEffect } from "react";
import useBreakpoint from "use-breakpoint";
import { useBoolean, useElementSize, useWindowSize } from "usehooks-ts";
import styles from "./style.module.scss";

export type NestedLayoutProps = {
  children: ReactNode;
};

function NestedLayout({ children }: NestedLayoutProps): JSX.Element {
  const { height } = useWindowSize();
  const [headerRef, { height: headerHeight }] = useElementSize();
  const {
    setFalse: offIsOpen,
    setTrue: onIsOpen,
    toggle: toggleIsOpen,
    value: isOpen,
  } = useBoolean(true);
  const { breakpoint } = useBreakpoint(breakpoints, "wide");

  useEffect(() => {
    switch (breakpoint) {
      case "mobile":
      case "tablet":
      case "desktop": {
        offIsOpen();

        break;
      }
      case "wide": {
        onIsOpen();

        break;
      }
    }
  }, [breakpoint, offIsOpen, onIsOpen]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.headerWrapper} ref={headerRef}>
          <Header onToggleMenu={toggleIsOpen} />
        </div>
        <aside
          className={styles.sidebarWrapper}
          style={{
            // なぜか 1px ずれる
            height: height - headerHeight - 1,
            top: headerHeight,
          }}
        >
          <Sidebar collapsed={!isOpen} />
        </aside>
        <hr className={styles.hr} style={{ top: headerHeight }} />
        <main className={styles.main}>{children}</main>
      </div>
      <div className={styles.drawerWrapper}>
        <Drawer onClose={offIsOpen} open={isOpen} />
      </div>
    </>
  );
}

export default NestedLayout;
