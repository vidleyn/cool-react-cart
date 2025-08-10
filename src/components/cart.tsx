import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  Divider,
  Input,
  Typography,
} from "@mui/material";
import { fetchProducts } from "../api/fetch-products";
import { useEffect, useState } from "react";
import ProductList from "./cart/product-list";

export default function Cart({ ...restProps }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box
      component="section"
      sx={{ mb: 10 }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", alignItems: "start", columnGap: 3 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: "1px solid #444444",
              borderRadius: 4,
              flex: "2 1 0",
            }}
          >
            <Box
              component="header"
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 120px 150px 120px 100px",
                columnGap: 2,
                alignItems: "center",
                px: 4,
                py: 4,
              }}
            >
              <Typography
                variant="h6"
                color="#aaaaaa"
                component="span"
              >
                Оборудование
              </Typography>
              <Typography
                variant="h6"
                color="#aaaaaa"
                component="span"
              >
                Цена
              </Typography>
              <Typography
                variant="h6"
                color="#aaaaaa"
                component="span"
              >
                Количество
              </Typography>
              <Typography
                variant="h6"
                color="#aaaaaa"
                component="span"
              >
                Стоимость
              </Typography>
              <Button>Очистить</Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {loading ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    p: 4,
                  }}
                >
                  <CircularProgress />
                </Box>
              ) : (
                <ProductList products={products} />
              )}
            </Box>
            <Box sx={{ display: "flex", justifyContent: "end", p: 4 }}>
              <Button variant="contained">Скачать список товаров</Button>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1px solid #444444",
              borderRadius: 4,
              flex: "1 1 0",
              p: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 3 }}
            >
              Данные заказа
            </Typography>
            <Divider></Divider>
            <Box sx={{ my: 3 }}>
              <Typography>Даты и время аренды</Typography>
              <Box>Укажите время аренды</Box>
              <Input></Input>
              <Button variant="contained">Рассчитать стоимость</Button>
              <Box>Количество смен: - Общее количество часов: - Сумма: - Итоговая сумма: -</Box>
              <Typography>Промокод</Typography>
              <Input></Input>
            </Box>
            <Divider></Divider>
            <Box sx={{ my: 3 }}>
              <Typography>Ваше имя</Typography>
              <Input></Input>
              <Typography>Номер телефона</Typography>
              <Input></Input>
              <Typography>E-mail</Typography>
              <Input></Input>
              <Typography>Комментарий к заказу</Typography>
              <Input></Input>
              <Checkbox></Checkbox>
              <Typography>Запомнить контакты в браузере для повторной покупки</Typography>
              <Checkbox></Checkbox>
              <Typography>Согласен(а) с политикой конфиденциальности.</Typography>
              <Checkbox></Checkbox>
              <Typography>
                Согласен(а) с тем, что деятельность по предоставлению оборудования в аренду не
                является публичной, в предоставлении оборудования может быть отказано.
              </Typography>
            </Box>
            <Button variant="contained">Отправить заявку</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
