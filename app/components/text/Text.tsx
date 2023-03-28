import { TextProps } from "../../constants/types/components_props/types"

const Text = ({ text = "default title", alignment }: TextProps) => (
  <p style={{ textAlign: alignment }}>{text}</p>
)
export default Text
