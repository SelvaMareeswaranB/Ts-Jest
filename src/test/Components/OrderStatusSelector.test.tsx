import { findByRole, render, screen } from "@testing-library/react";
import OrderStatusSelector from "../../components/OrderStatusSelector";
import { Theme } from "@radix-ui/themes";
import userEvent from "@testing-library/user-event";

describe("Order Status Selector", () => {
  const renderComponent = () => {
    const onChangeFunc = vi.fn();
    render(
      <Theme>
        <OrderStatusSelector onChange={onChangeFunc} />
      </Theme>
    );

    return {
      button: screen.getByRole("combobox"),
      user: userEvent.setup(),
      options: () => screen.findAllByRole("option"),
      onChange: onChangeFunc,
      getOptions:(label:RegExp)=> screen.findByRole('option',{name:label})
    };
  };
  it("Should render the New as a default value", async () => {
    const { button, user, options } = renderComponent();

    expect(button).toHaveTextContent(/new/i);
    await user.click(button);

    const option = await options();
    expect(option).toHaveLength(3);
    const textArray = option.map((data) => data.textContent);
    expect(textArray).toEqual(["New", "Processed", "Fulfilled"]);
  });
  it.each([
    {lable:/processed/i,value:'processed'},
    {lable:/fulfilled/i,value:'fulfilled'},

  ])(`Should Call onChange with $lable when the $value option is clicked`, async ({lable,value}) => {
    const { button, user,onChange,getOptions } = renderComponent();

    await user.click(button)

    const option=await getOptions(lable)
    await user.click(option)

    expect(onChange).toHaveBeenCalledWith(value)
  });
  it("Should call the onChange with new when the new option is clicked", async () => {
    const { button, user, onChange,getOptions } = renderComponent();

    await user.click(button);
    
    const optionFullFill=await getOptions(/fulfilled/i)
    await user.click(optionFullFill)
  
    await user.click(button);

    const optionNew=await getOptions(/new/i)
    await user.click(optionNew)

    expect(onChange).toBeCalledWith('new')

  });
});
