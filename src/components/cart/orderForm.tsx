import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useForm } from "react-hook-form"
import type { OrderForm } from "../../model/form";





export default function OrderForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderForm>()
  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        border: "1px solid #444444",
        borderRadius: 4,
        flex: "1 1 0",
        p: 4,
      }}
    >
      <Box
        component="header"
        sx={{}}
      >
        <Typography variant="h6">Данные заказа</Typography>
      </Box>
      <Divider></Divider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography
          variant="h6"
          gutterBottom
        >
          Даты и время аренды
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          gutterBottom
        >
          Укажите время аренды
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker label="Время начала аренды" />
          <DateTimePicker label="Время окончания аренды" />
        </LocalizationProvider>

        <Button
          variant="contained"
          sx={{ mb: 2 }}
        >
          Рассчитать стоимость
        </Button>

        <Typography
          variant="body2"
          sx={{ mb: 2 }}
        >
          Количество смен: – <br />
          Общее количество часов: – <br />
          Сумма: – <br />
          Итоговая сумма: –
        </Typography>

        <TextField label="Промокод"></TextField>
      </Box>
      <Divider></Divider>
      <Box
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={onSubmit}
      >
        <TextField {...register("firstName")} label="Ваше имя"></TextField>
        <TextField label="Номер телефона"></TextField>
        <TextField {...register("email")} label="E-mail"></TextField>
        <TextField label="Комментарий к заказу"></TextField>

        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Запомнить контакты в браузере для повторной покупки"
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Согласен(а) с политикой конфиденциальности."
          />
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Согласен(а) с тем, что деятельность по предоставлению оборудования в аренду не является
          публичной, в предоставлении оборудования может быть отказано."
          />
        </FormGroup>
        <Button onClick={onSubmit} variant="contained">Отправить заявку</Button>
      </Box>
    </Box>
  );
}
