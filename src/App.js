import { useState } from "react";

export default function App() {
  const [pageId, setPageId] = useState(0);
  const team1 = [
    {
      name: "Б. Тэмүүлэн",
      tag: "M",
      team: "Удирдлага",
    },
    {
      name: "Б. Зулзаяа",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Энхмандах",
      tag: "F",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Н. Батжаргал",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Билигүүн",
      tag: "M",
      team: "Удирдлага",
    },
    {
      name: "Л. Соронзонболд",
      tag: "M",
      team: "Удирдлага",
    },
    {
      name: "Э. Баасанбат",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ц. Цэнгэл",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "У. Эгшиг",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "С. Янжмаа",
      tag: "F",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Сансар",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Б. Жавхлан",
      tag: "N",
      team: "Хувийн банкны хэлтэс",
    },
    {
      name: "Л. Болор-Эрдэнэ",
      tag: "F",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Л. Төр-Од",
      tag: "N",
      team: "Хууль, эрхзүй, нийцүүлэлтийн хэлтэс",
    },
  ];
  const team2 = [
    {
      name: "З. Үрлээ",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Буян-Очир",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Э. Сэрээтэр",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Билгүүн",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Г. Абулхайр",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Маргад-Эрдэнэ",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ц. Чинбат",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Энхбаатар",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Ганзориг",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Насанжаргал",
      tag: "N",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Э. Цолмон",
      tag: "N",
      team: "",
    },
    {
      name: "А. Энхтүвшин",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Д. Лхагвадорж",
      tag: "M",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Ө. Батнасан",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Э. Тамир",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Э. Мишээлт",
      tag: "F",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "О. Намуун",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Баярбат",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team3 = [
    {
      name: "Э. Батбуян",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "О. Жаргалмаа",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "А. Минжин",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Монголдүү",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Б. Нинжмаа",
      tag: "F",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Пүрэвдорж",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ж. Чинзориг",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Т. Баярсайхан",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Р. Идэрмөнх",
      tag: "N",
      team: "Хууль, эрхзүй, нийцүүлэлтийн хэлтэс",
    },
    {
      name: "З. Тэнгис",
      tag: "N",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Нямсамбуу",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Га. Билгүүн",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "М. Мандухай",
      tag: "F",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Н. Тунгалаг",
      tag: "F",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Нямсүрэн",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Эрдэнэхүү",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "О. Насанбуян",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team4 = [
    {
      name: "Ба. Хулан",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "М. Отгончимэг",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Төмөр-Очир",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Мөнхбаяр",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "О. Гантулга",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Батзаяа",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Гантулга",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Мөнхчулуун",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ч. Билгүүн",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Оюун-Эрдэнэ",
      tag: "N",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Мөнх-Эрдэнэ",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Мишээл",
      tag: "F",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Э. Солонго",
      tag: "F",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Батзориг",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Б. Пүрэвжаргал",
      tag: "N",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ж. Болор-Эрдэнэ",
      tag: "N",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Х. Даметкен",
      tag: "F",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Дөлгөөнтөр",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team5 = [
    {
      name: "А. Билгүүн",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Т. Хонгорзул",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ба. Дөлгөөн",
      tag: "N",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Б. Тамир",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Ичинхорлоо",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "А. Мандхай",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "П. Төрмөнх",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Эрдэнэбаяр",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Бадамдорж",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "М. Нямдорж",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Бо. Дөлгөөн",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Мөрөн",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "М. Толхын",
      tag: "F",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "О. Хулан",
      tag: "F",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Г. Тунгалаг",
      tag: "N",
      team: "",
    },
    {
      name: "М. Анхбаяр",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Цогбүрэн",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team6 = [
    {
      name: "Б. Энхбилгүүн",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Т. Анхцэцэг",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Э. Энх-Орчлон",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ж. Хулан",
      tag: "F",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Т. Батманлай",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Эрдэнэ",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "А. Маралмаа",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Энхжин",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Цолмон",
      tag: "N",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Г. Мөнхбаясгалан",
      tag: "F",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ч. Мягмарнаран",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "С. Нямсүрэн",
      tag: "F",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Р. Батцэцэг",
      tag: "N",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Э. Пунсалдулам",
      tag: "F",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Ж. Нансалмаа",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Л. Түвшинтөгс",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Б. Номуужин",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Жавхлантөгс",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team7 = [
    {
      name: "Э. Ундрах",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "М. Алтанзул",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Бишрэлт",
      tag: "N",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Д. Хатантуул",
      tag: "F",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Бат-Оргил",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Номиндарь",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "П. Тэмүүжин",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Оюунгэрэл",
      tag: "F",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Содбилэгт",
      tag: "N",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Халиун",
      tag: "F",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Э. Эрдэнэбат",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Долгорсүрэн",
      tag: "N",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Ч. Алтан-Өлзий",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Х. Гомбо",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Т. Энх-Амгалан",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Д. Нандин-Эрдэнэ",
      tag: "F",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "А. Анхбаяр",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team8 = [
    {
      name: "Б. Мөнхжаргал",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ч. Гэрэлчимэг",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Анужин",
      tag: "F",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "З. Энхжин",
      tag: "F",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Ц. Намжилваанчиг",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Лхагваа",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Чинбаатар",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Энхсайхан",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "З. Динасыл",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ба. Халиун",
      tag: "F",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Х. Энхжаргал",
      tag: "F",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Наранцэцэг",
      tag: "F",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Э. Эгшиглэн",
      tag: "N",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Чингүүн",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "А. Тэмүүлэн",
      tag: "N",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Д. Мөнхдэлгэр",
      tag: "F",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Н. Цогт",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Нямдаваа",
      tag: "F",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
  ];
  const getPages = () => {
    switch (pageId) {
      case 0:
        return (
          <div class="max-w-[480px] bg-gray flex pb-7 rounded-lg flex-col mx-auto">
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Багууд
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              <button
                onClick={() => setPageId(1)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 1</p>
              </button>
              <button
                onClick={() => setPageId(2)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 2</p>
              </button>
              <button
                onClick={() => setPageId(3)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 3</p>
              </button>
              <button
                onClick={() => setPageId(4)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 4</p>
              </button>
              <button
                onClick={() => setPageId(5)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 5</p>
              </button>
              <button
                onClick={() => setPageId(6)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 6</p>
              </button>
              <button
                onClick={() => setPageId(7)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 7</p>
              </button>
              <button
                onClick={() => setPageId(8)}
                class="h-12 bg-primary rounded-lg w-full"
              >
                <p class="font-bold text-l text-center text-white">Баг 8</p>
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 1
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team1.map((item, index) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div
                    class={`bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center `}
                  >
                    <p class="font-bold text-base text-white ">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 2
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team2.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 3
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team3.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 4
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team4.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 5:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 5
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team5.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 6:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 6
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team6.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 7
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team7.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div class="max-w-[480px] py-4 bg-white rounded-lg flex flex-col mx-auto">
            <button onClick={() => setPageId(0)} class="w-8 h-8">
              <img src="/icons/ic_back.png" class="w-8 h-8 ml-4" alt="" />
            </button>
            <p class="text-xl text-black text-center font-bold mt-2 animate-wiggle">
              Баг 8
            </p>
            <div class="px-7 mt-7 gap-4 flex flex-col">
              {team8.map((item) => (
                <div class="p-4 flex items-center rounded-lg bg-gray justify-between">
                  <div class="flex flex-col">
                    <p class="font-semibold text-black text-base">
                      {item.name}
                    </p>
                    <p class="font-regular text-black text-xs">{item.team}</p>
                  </div>
                  <div class="bg-primary rounded-full w-8 h-8 items-center flex text-center justify-center">
                    <p class="font-bold text-base text-white">{item.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };
  return <div class="p-2">{getPages()}</div>;
}
