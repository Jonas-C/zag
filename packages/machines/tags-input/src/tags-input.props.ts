import { createProps } from "@zag-js/types"
import { createSplitProps } from "@zag-js/utils"
import type { ItemProps, UserDefinedContext } from "./tags-input.types"

export const props = createProps<UserDefinedContext>()([
  "addOnPaste",
  "allowEditTag",
  "allowOverflow",
  "autoFocus",
  "blurBehavior",
  "delimiter",
  "dir",
  "disabled",
  "form",
  "getRootNode",
  "id",
  "ids",
  "inputValue",
  "invalid",
  "max",
  "maxLength",
  "name",
  "onFocusOutside",
  "onHighlightChange",
  "onInteractOutside",
  "onPointerDownOutside",
  "onValueChange",
  "onValueInvalid",
  "readOnly",
  "translations",
  "validate",
  "value",
])

export const splitProps = createSplitProps<Partial<UserDefinedContext>>(props)

export const itemProps = createProps<ItemProps>()(["index", "disabled", "value"])

export const splitItemProps = createSplitProps<ItemProps>(itemProps)