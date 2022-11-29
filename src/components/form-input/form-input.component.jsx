import { FormInputLabel, FormInputBox, Group } from "./form-input.styles"

const FormInput = ({ label, ...props }) => (
  <Group>
    <FormInputBox {...props} />

    {label && 
    (<FormInputLabel shrink={props.value.length}>
            {label}
    </FormInputLabel>)}

  </Group>
);
export default FormInput;
