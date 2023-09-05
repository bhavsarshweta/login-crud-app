import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "custom" | "custom1" | "default"
declare module "D:/YMS/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}