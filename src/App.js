import { useState } from "react";

export default function App() {
  const [pageId, setPageId] = useState(0);
  const team1 = [
    {
      name: "Б. Тэмүүлэн",
      tag: "S",
      team: "Удирдлага",
    },
    {
      name: "Б. Зулзаяа",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Энхмандах",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Н. Батжаргал",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Билигүүн",
      tag: "S",
      team: "Удирдлага",
    },
    {
      name: "Л. Соронзонболд",
      tag: "S",
      team: "Удирдлага",
    },
    {
      name: "Э. Баасанбат",
      tag: "S",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ц. Цэнгэл",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "У. Эгшиг",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "С. Янжмаа",
      tag: "M",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Сансар",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Б. Жавхлан",
      tag: "L",
      team: "Хувийн банкны хэлтэс",
    },
    {
      name: "Л. Болор-Эрдэнэ",
      tag: "M",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Л. Төр-Од",
      tag: "L",
      team: "Хууль, эрхзүй, нийцүүлэлтийн хэлтэс",
    },
  ];
  const team2 = [
    {
      name: "З. Үрлээ",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Буян-Очир",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Э. Сэрээтэр",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Билгүүн",
      tag: "S",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Г. Абулхайр",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Маргад-Эрдэнэ",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ц. Чинбат",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Энхбаатар",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Ганзориг",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Насанжаргал",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Э. Цолмон",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "А. Энхтүвшин",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Д. Лхагвадорж",
      tag: "S",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Ө. Батнасан",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Э. Тамир",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Э. Мишээлт",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "О. Намуун",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Баярбат",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team3 = [
    {
      name: "Э. Батбуян",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "О. Жаргалмаа",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "А. Минжин",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Монголдүү",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Б. Нинжмаа",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Пүрэвдорж",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ж. Чинзориг",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Т. Баярсайхан",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Р. Идэрмөнх",
      tag: "L",
      team: "Хууль, эрхзүй, нийцүүлэлтийн хэлтэс",
    },
    {
      name: "З. Тэнгис",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Нямсамбуу",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Га. Билгүүн",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "М. Мандухай",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Н. Тунгалаг",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Нямсүрэн",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Эрдэнэхүү",
      tag: "S",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "О. Насанбуян",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team4 = [
    {
      name: "Ба. Хулан",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "М. Отгончимэг",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Төмөр-Очир",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Г. Мөнхбаяр",
      tag: "S",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "О. Гантулга",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Батзаяа",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Гантулга",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Н. Мөнхчулуун",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Ч. Билгүүн",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Оюун-Эрдэнэ",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Б. Мөнх-Эрдэнэ",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Мишээл",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Э. Солонго",
      tag: "M",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Батзориг",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Б. Пүрэвжаргал",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ж. Болор-Эрдэнэ",
      tag: "L",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Х. Даметкен",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Дөлгөөнтөр",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team5 = [
    {
      name: "А. Билгүүн",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Т. Хонгорзул",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ба. Дөлгөөн",
      tag: "L",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Б. Тамир",
      tag: "S",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Ичинхорлоо",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "А. Мандхай",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "П. Төрмөнх",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Эрдэнэбаяр",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Бадамдорж",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "М. Нямдорж",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Бо. Дөлгөөн",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Мөрөн",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "М. Толхын",
      tag: "M",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "О. Хулан",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Г. Тунгалаг",
      tag: "L",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "М. Анхбаяр",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Цогбүрэн",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team6 = [
    {
      name: "Б. Энхбилгүүн",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Т. Анхцэцэг",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Э. Энх-Орчлон",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ж. Хулан",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Т. Батманлай",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Эрдэнэ",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "А. Маралмаа",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Энхжин",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Цолмон",
      tag: "L",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Г. Мөнхбаясгалан",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ч. Мягмарнаран",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "С. Нямсүрэн",
      tag: "M",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Р. Батцэцэг",
      tag: "L",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Э. Пунсалдулам",
      tag: "M",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Ж. Нансалмаа",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Л. Түвшинтөгс",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Б. Номуужин",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Жавхлантөгс",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team7 = [
    {
      name: "Э. Ундрах",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "М. Алтанзул",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Бишрэлт",
      tag: "L",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Д. Хатантуул",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Б. Бат-Оргил",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Б. Номиндарь",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "П. Тэмүүжин",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Оюунгэрэл",
      tag: "M",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "С. Содбилэгт",
      tag: "L",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Халиун",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Э. Эрдэнэбат",
      tag: "S",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Долгорсүрэн",
      tag: "L",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Ч. Алтан-Өлзий",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Х. Гомбо",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Т. Энх-Амгалан",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "Д. Нандин-Эрдэнэ",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "А. Анхбаяр",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
  ];
  const team8 = [
    {
      name: "Б. Мөнхжаргал",
      tag: "S",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Ч. Гэрэлчимэг",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "Н. Анужин",
      tag: "M",
      team: "Борлуулалтын хэлтэс",
    },
    {
      name: "З. Энхжин",
      tag: "M",
      team: "Маркетингийн хэлтэс",
    },
    {
      name: "Ц. Намжилваанчиг",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Лхагваа",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Г. Чинбаатар",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Энхсайхан",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "З. Динасыл",
      tag: "S",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Ба. Халиун",
      tag: "M",
      team: "Санхүү, хөрөнгө оруулалтын хэлтэс",
    },
    {
      name: "Х. Энхжаргал",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Т. Наранцэцэг",
      tag: "M",
      team: "Бизнесийн зээлийн алба",
    },
    {
      name: "Э. Эгшиглэн",
      tag: "L",
      team: "Хүний нөөц, захиргааны алба",
    },
    {
      name: "Б. Чингүүн",
      tag: "S",
      team: "Эрсдэлийн удирдлагын хэлтэс",
    },
    {
      name: "А. Тэмүүлэн",
      tag: "L",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Д. Мөнхдэлгэр",
      tag: "M",
      team: "Бизнес хөгжлийн алба",
    },
    {
      name: "Н. Цогт",
      tag: "S",
      team: "Мэдээллийн технологийн хэлтэс",
    },
    {
      name: "Д. Нямдаваа",
      tag: "M",
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
