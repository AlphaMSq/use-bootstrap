import { useBlock, BlockProps } from "../../../composables/base/useBlock.js";
import { hProps } from "../../../composables/utils/useProps.js";
import { computed, defineComponent, h, provide, ref } from "#imports";
export default defineComponent({
  name: "BsFormInputGroup",
  props: {
    ...BlockProps,
    tag: {
      type: String,
      default: "div"
    },
    size: {
      type: String,
      default: void 0
    }
  },
  setup(props, context) {
    const block = useBlock(props);
    const hasValidation = ref(false);
    provide("hasValidation", hasValidation);
    const current = {
      class: computed(() => {
        return {
          [`input-group`]: true,
          [`input-group-${props.size}`]: props.size,
          "has-validation": hasValidation.value
        };
      })
    };
    return () => h(props.tag, hProps(current, block), context.slots);
  }
});
