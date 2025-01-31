
declare module 'luckyexcel';
declare module 'file-saver';
declare module 'vuedraggable';
declare module 'element-resize-detector';

/**
 * 解决找不到vue模块问题
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue"; 
  const vueComponent: DefineComponent<{}, {}, any>; 
  export default vueComponent;
}

/**
 * 事件类型
 */
declare type HTMLElementEvent<T extends HTMLElement> = MouseEvent & {
  target: T
  currentTarget: T
}