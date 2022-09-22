import breakpoints from "libs/breakpoints";
import { useRouter } from "next/router";
import { HiOutlineCog, HiOutlineBookOpen, HiOutlineHome } from "react-icons/hi";
import { ProSidebar, ProSidebarProps, Menu, MenuItem } from "react-pro-sidebar";
import useBreakpoint from "use-breakpoint";
import styles from "./style.module.scss";

export type SidebarProps = Pick<ProSidebarProps, "collapsed">;

function Sidebar({ collapsed }: SidebarProps): JSX.Element {
  const router = useRouter();
  const { breakpoint } = useBreakpoint(breakpoints, "wide");

  return (
    <ProSidebar
      className={styles.proSidebar}
      collapsed={collapsed || breakpoint === "tablet"}
    >
      <Menu>
        <MenuItem
          icon={<HiOutlineHome size={24} />}
          onClick={(): void => {
            router.push("/");
          }}
        >
          ホーム
        </MenuItem>
        <MenuItem
          icon={<HiOutlineBookOpen size={24} />}
          onClick={(): void => {
            router.push("/library");
          }}
        >
          ライブラリ
        </MenuItem>
        <hr className={styles.hr} />
        <MenuItem
          icon={<HiOutlineCog size={24} />}
          onClick={(): void => {
            router.push("/preferences");
          }}
        >
          設定
        </MenuItem>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
