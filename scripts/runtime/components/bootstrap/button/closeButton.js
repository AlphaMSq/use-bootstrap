import {
  CloseButtonProps,
  useCloseButton
} from "../../../composables/bootstrap/useCloseButton.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { BlockProps, useBlock } from "../../../composables/base/useBlock.js";
import { defineComponent, h, computed, ref } from "#imports";
export default defineComponent({
  name: "BsCloseButton",
  props: {
    ...BlockProps,
    ...CloseButtonProps,
    tag: {
      type: String,
      default: "button"
    },
    type: {
      type: String,
      default: "button"
    },
    white: {
      type: Boolean
    },
    ariaLabel: {
      type: String,
      default: "Close"
    }
  },
  setup(props, context) {
    const elementRef = ref();
    const block = useBlock(props);
    const close = useCloseButton(props, elementRef);
    const current = {
      class: computed(() => {
        return {
          [`btn-close`]: true,
          [`btn-close-white`]: props.white
        };
      }),
      attr: {
        "type": props.type,
        "aria-label": props.ariaLabel
      },
      ref: elementRef
    };
    return () => h(props.tag, hProps(current, close, block), context.slots);
  }
});
