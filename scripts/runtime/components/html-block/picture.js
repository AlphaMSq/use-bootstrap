import { hProps } from "../../composables/utils/useProps.js";
import { useImg, ImageProps } from "../../composables/html/useImg.js";
import { BlockProps, useBlock } from "../../composables/base/useBlock.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "HtmlPicture",
  inheritAttrs: false,
  props: {
    ...BlockProps,
    ...ImageProps,
    srcset: {
      type: String,
      default: void 0
    },
    tag: {
      type: String,
      default: "picture"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const image = useImg(props);
    return () => h(props.tag, {}, [
      props.srcset ? h(
        "source",
        {
          srcset: props.srcset
        },
        void 0
      ) : void 0,
      context.slots.default ? context.slots.default() : void 0,
      h(
        "img",
        {
          ...context.attrs,
          ...hProps(image, block)
        },
        void 0
      )
    ]);
  }
});
