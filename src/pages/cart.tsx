import MainContents from "../components/main-contents";
import Heading from "../components/heading";
import CartContainer from "../containers/cart-container";

export default function Cart() {
  return (
    <MainContents>
      <Heading title="Оформление заказа"></Heading>
      <CartContainer></CartContainer>
    </MainContents>
  );
}
