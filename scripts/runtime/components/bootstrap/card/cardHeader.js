import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { defineComponent, h } from "#imports";
export default defineComponent({
  name: "BsCardHeader",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const current = {
      class: {
        "card-header": true
      }
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
