import { ComponentProps } from "react";
import ReactModernDrawer from "react-modern-drawer";

export type DrawerProps = Pick<
  ComponentProps<typeof ReactModernDrawer>,
  "onClose" | "open"
>;

function Drawer({ onClose, open }: DrawerProps): JSX.Element {
  return (
    <ReactModernDrawer direction="left" onClose={onClose} open={open}>
      <div>Hello World</div>
    </ReactModernDrawer>
  );
}

export default Drawer;
