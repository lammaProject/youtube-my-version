import { useRouter } from "next/router";

const ErrorDesc = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Ошибка получения данных</h1>
      <button className={"text-[#ff0000]"} onClick={() => router.reload()}>
        Обновить страницу
      </button>
    </div>
  );
};

export default ErrorDesc;
