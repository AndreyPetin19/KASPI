import React, { useEffect, useState, useRef } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  Search,
  ShoppingCart,
  Smartphone,
  ReceiptText,
  Repeat2,
  TrainFront,
  Landmark,
  Building2,
  House,
  QrCode,
  MessageSquare,
  Menu,
  CreditCard,
  Plus,
  Copy,
  Upload,
  Share2,
  X,
  GraduationCap,
  FileText,
  ChevronRight,
  BadgePercent,
  LogOut,
  ScanFace
} from "lucide-react";

import { QRCodeSVG } from "qrcode.react";
import "./styles.css";


function PrototypeBadge() {
  return <div className="prototype-badge">.</div>;
}


const ACCOUNTS = [
  {
    icon: "gold",
    title: "Kaspi Gold",
    sub: "*1234",
    amount: "150 000 ₸"
  },
  {
    icon: "red",
    title: "Kaspi Red",
    sub: "Покупки в рассрочку 0%",
    amount: "125 000 ₸"
  },
  {
    icon: "deposit",
    title: "Депозит KZT",
    sub: "До 05.01.2027",
    amount: "555 026,37 ₸"
  },
  {
    icon: "loan",
    title: "Кредит",
    sub: "Ежемесячный платеж",
    amount: "92 500 ₸"
  },
  {
    icon: "bonus",
    title: "Kaspi Бонус",
    sub: "",
    amount: "5 612,21 Б"
  }
];


const GOV_ITEMS = [
  [
    "Справки",
    "Социальные, по недвижимости и медицинские"
  ],
  [
    "Прописка и снятие с прописки",
    "по месту жительства"
  ],
  [
    "Пособия и выплаты",
    "На ребенка, для многодетных, при потере работы"
  ],
  [
    "Переоформление автомобиля",
    ""
  ],
  [
    "Декларация по форме 270",
    "О доходах и имуществе"
  ],
  [
    "Декларация по форме 250",
    "Об активах и обязательствах"
  ]
];


function BottomNav({ page, setPage }) {
  const items = [
    ["home", House, "Главная"],
    ["qr", QrCode, "Kaspi QR"],
    ["messages", MessageSquare, "Сообщения"],
    ["services", Menu, "Сервисы"]
  ];

  return (
    <div className="bottom-nav">
      {items.map(([id, Icon, label]) => (
        <button
          key={id}
          className={
            page === id ||
            (
              id === "services" &&
              ["gov", "id"].includes(page)
            )
              ? "active"
              : ""
          }
          onClick={() => {
            if (id === "qr") {
              setPage("qr");
            } else if (id === "services") {
              setPage("gov");
            } else if (id === "home") {
              setPage("home");
            }
          }}
        >
          <Icon size={25} strokeWidth={2.1}/>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}


function Home({ setPage }) {
  const apps = [
    [ShoppingCart, "Магазин"],
    [Smartphone, "Мой Банк"],
    [ReceiptText, "Платежи"],
    [Repeat2, "Переводы"],
    [BadgePercent, "Magnum"],
    [TrainFront, "Travel"],
    [Landmark, "Госуслуги"],
    [Building2, "Объявления"]
  ];

  return (
    <div className="screen with-nav">

      <div className="home-top">
        <div className="search-pill">
          <Search size={22}/>
          <span>Поиск по Kaspi.kz</span>
        </div>

        <ShoppingCart
          className="cart"
          size={32}
        />
      </div>


      <div className="promo-row">

        <div className="promo teal">
          <b>Мебель</b>
          <strong>0·0·12</strong>
          <span>15.12 – 31.12</span>
        </div>

        <div className="promo blue">
          <b>ТВ, аудио, видео</b>
          <strong className="yellow">
            5% Бонусов
          </strong>
          <span>15.12 – 31.12</span>
        </div>

        <div className="promo teal">
          <b>Мебель</b>
          <strong>0·0·12</strong>
        </div>

      </div>


      <div className="app-grid">

        {apps.map(([Icon, label]) => (

          <button
            key={label}
            onClick={() =>
              label === "Мой Банк"
                ? setPage("bank")
                : label === "Госуслуги"
                  ? setPage("gov")
                  : undefined
            }
          >

            <Icon
              size={33}
              strokeWidth={2}
            />

            <span>{label}</span>

          </button>

        ))}

      </div>


      <div className="divider"/>


      <div className="products-grid">

        <div className="mini-product">

          <span className="square red">
            0·0·12
          </span>

          <div>
            <b>Рассрочка 0-0-12</b>
          </div>

        </div>


        <div className="mini-product">

          <span className="square green">
            ₸
          </span>

          <div>
            <b>Кредит</b>
            <small>до 2 млн ₸</small>
          </div>

        </div>


        <div className="mini-product">

          <span className="square red">
            RED
          </span>

          <div>
            <b>Kaspi Red+</b>
            <small>
              Рассрочка до 500 000 ₸
            </small>
          </div>

        </div>


        <div className="mini-product">

          <span className="square yellow">
            ◉
          </span>

          <div>
            <b>
              Накопительный депозит{" "}
              <em>20%</em>
            </b>
          </div>

        </div>

      </div>


      <div className="hero-card">

        <div>

          <h2>
            Ремонт
            <br/>
            и интерьер мечты
          </h2>

          <span>0·0·12</span>

        </div>

        <div className="sofa"/>

      </div>


      <h2 className="section-title">
        Вы недавно смотрели
      </h2>


      <div className="recent-row">
        <div className="recent-card"/>
        <div className="recent-card"/>
        <div className="recent-card"/>
      </div>


      <PrototypeBadge/>

    </div>
  );
}


function BackHeader({ title, onBack }) {
  return (
    <div className="header">

      <button onClick={onBack}>
        <ArrowLeft size={28}/>
      </button>

      <h1>{title}</h1>

      <div className="header-spacer"/>

    </div>
  );
}


function AccountIcon({ type }) {
  const cls = "acc-icon " + type;

  return (
    <div className={cls}>
      {
        type === "gold"
          ? "◉"
          : type === "red"
            ? "RED"
            : type === "deposit"
              ? "₸"
              : type === "bonus"
                ? "Б"
                : "0·0·24"
      }
    </div>
  );
}


function Bank({ setPage }) {
  return (
    <div className="screen bank-screen">

      <div className="bank-header">

        <button
          onClick={() =>
            setPage("home")
          }
        >
          <Menu size={24}/>
        </button>


        <div className="bank-title">

          <div className="bank-logo">

            <img
              src="/Kaspi-logo.png"
              alt="Kaspi"
            />

          </div>

          <b>Мой Банк</b>

        </div>


        <div/>

      </div>


      {ACCOUNTS.map((a, i) => (

        <React.Fragment key={a.title}>

          <div className="account-row">

            <AccountIcon type={a.icon}/>

            <div className="account-copy">

              <b>{a.title}</b>

              {a.sub && (
                <small>{a.sub}</small>
              )}

            </div>


            <div className="account-amount">
              {a.amount}
            </div>

          </div>


          {i < 3 && (

            <div className="action-row">

              <Plus size={20}/>

              <span>
                {
                  i === 0
                    ? "Оформить Kaspi Gold для ребенка"
                    : i === 1
                      ? "Открыть дополнительный продукт"
                      : "Открыть Депозит"
                }
              </span>

            </div>

          )}

        </React.Fragment>

      ))}


      <PrototypeBadge/>

    </div>
  );
}


function CameraPage({ setPage }) {
  const videoRef = useRef(null);
  const [error, setError] = useState("");


  useEffect(() => {
    let stream;

    (async () => {

      try {

        stream =
          await navigator.mediaDevices.getUserMedia({
            video: {
              facingMode: "environment"
            },
            audio: false
          });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

      } catch (e) {

        setError(
          "Не удалось получить доступ к камере. Откройте приложение по HTTPS и разрешите доступ к камере."
        );

      }

    })();


    return () => {
      stream
        ?.getTracks()
        .forEach((t) => t.stop());
    };

  }, []);


  return (
    <div className="camera-screen">

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
      />


      <div className="camera-overlay">

        <button
          className="camera-close"
          onClick={() =>
            setPage("home")
          }
        >
          <X size={28}/>
        </button>


        <div className="scanner-frame">
          <i/>
          <i/>
          <i/>
          <i/>
        </div>


        <div className="camera-caption">
          Наведите камеру на QR-код
        </div>


        {error && (
          <div className="camera-error">
            {error}
          </div>
        )}

      </div>

    </div>
  );
}


function Gov({ setPage }) {
  return (
    <div className="screen with-nav">

      <BackHeader
        title="Госуслуги"
        onBack={() =>
          setPage("home")
        }
      />


      <div className="segmented">

        <button className="selected">
          Все услуги
        </button>

        <button>
          Мои заявки
        </button>

      </div>


      <div className="gov-search">

        <Search size={22}/>

        <span>
          Поиск по Госуслугам
        </span>

      </div>


      <div className="doc-cards">

        <button
          className="doc-card mint"
          onClick={() =>
            setPage("id")
          }
        >

          <CreditCard/>

          <span>
            Удостоверение
            <br/>
            личности
          </span>

        </button>


        <button className="doc-card cyan">

          <CreditCard/>

          <span>
            Паспорт
            <br/>
            гражданина РК
          </span>

        </button>


        <button className="doc-card blue-lite">

          <GraduationCap/>

          <span>
            Студенческий
            <br/>
            билет
          </span>

        </button>

      </div>


      <button className="all-docs">

        Все документы

        <ChevronRight/>

      </button>


      <div className="divider wide"/>


      <div className="gov-list">

        {GOV_ITEMS.map(([t, s]) => (

          <div
            className="gov-row"
            key={t}
          >

            <FileText size={29}/>

            <div>

              <b>{t}</b>

              {s && (
                <small>{s}</small>
              )}

            </div>

            <ChevronRight size={20}/>

          </div>

        ))}

      </div>

    </div>
  );
}


function idbOpen() {
  return new Promise(
    (resolve, reject) => {

      const req =
        indexedDB.open(
          "olympiadPrototype",
          1
        );


      req.onupgradeneeded = () =>
        req.result.createObjectStore(
          "media"
        );


      req.onsuccess = () =>
        resolve(req.result);


      req.onerror = reject;

    }
  );
}


async function saveImage(dataUrl) {
  const db = await idbOpen();

  return new Promise(
    (resolve, reject) => {

      const tx =
        db.transaction(
          "media",
          "readwrite"
        );


      tx
        .objectStore("media")
        .put(
          dataUrl,
          "id-card"
        );


      tx.oncomplete = resolve;
      tx.onerror = reject;

    }
  );
}


async function loadImage() {
  const db = await idbOpen();

  return new Promise(
    (resolve, reject) => {

      const tx =
        db.transaction(
          "media",
          "readonly"
        );


      const req =
        tx
          .objectStore("media")
          .get("id-card");


      req.onsuccess = () =>
        resolve(
          req.result || ""
        );


      req.onerror = reject;

    }
  );
}


function IdDocument({ setPage }) {
  const [tab, setTab] =
    useState("doc");

  const [image, setImage] =
    useState("");

  const [showQr, setShowQr] =
    useState(false);


  const [scale, setScale] =
    useState(1);

  const [position, setPosition] =
    useState({
      x: 0,
      y: 0
    });


  const gesture = useRef({
    startDistance: 0,
    startScale: 1,
    startX: 0,
    startY: 0,
    startPosX: 0,
    startPosY: 0,
    pinchCenterX: 0,
    pinchCenterY: 0
  });


  const [fields, setFields] =
    useState(() => {

      try {

        return (
          JSON.parse(
            localStorage.getItem(
              "demo-id-fields"
            )
          ) || {}
        );

      } catch {

        return {};

      }

    });


  useEffect(() => {

    loadImage()
      .then(setImage)
      .catch(() => {});

  }, []);


  useEffect(() => {

    localStorage.setItem(
      "demo-id-fields",
      JSON.stringify(fields)
    );

  }, [fields]);


  const onUpload = (e) => {

    const file =
      e.target.files?.[0];

    if (!file) return;


    const reader =
      new FileReader();


    reader.onload =
      async () => {

        setImage(reader.result);

        await saveImage(
          reader.result
        );

      };


    reader.readAsDataURL(file);

  };


  const getDistance =
    (touches) => {

      const dx =
        touches[1].clientX -
        touches[0].clientX;

      const dy =
        touches[1].clientY -
        touches[0].clientY;


      return Math.hypot(dx, dy);

    };


  const getCenter =
    (touches) => ({

      x:
        (
          touches[0].clientX +
          touches[1].clientX
        ) / 2,

      y:
        (
          touches[0].clientY +
          touches[1].clientY
        ) / 2

    });


  const handleZoomStart =
    (e) => {

      if (
        e.touches.length === 2
      ) {

        const center =
          getCenter(e.touches);


        gesture.current.startDistance =
          getDistance(e.touches);


        gesture.current.startScale =
          scale;


        gesture.current.startPosX =
          position.x;

        gesture.current.startPosY =
          position.y;


        gesture.current.pinchCenterX =
          center.x;

        gesture.current.pinchCenterY =
          center.y;


        return;
      }


      if (
        e.touches.length === 1 &&
        scale > 1
      ) {

        gesture.current.startX =
          e.touches[0].clientX;

        gesture.current.startY =
          e.touches[0].clientY;


        gesture.current.startPosX =
          position.x;

        gesture.current.startPosY =
          position.y;

      }

    };


  const handleZoomMove =
    (e) => {

      if (
        e.touches.length === 2
      ) {

        const distance =
          getDistance(e.touches);

        const center =
          getCenter(e.touches);


        const ratio =
          distance /
          gesture.current.startDistance;


        const newScale =
          Math.min(
            4,
            Math.max(
              1,
              gesture.current.startScale *
              ratio
            )
          );


        const scaleRatio =
          newScale /
          gesture.current.startScale;


        const centerMoveX =
          center.x -
          gesture.current.pinchCenterX;


        const centerMoveY =
          center.y -
          gesture.current.pinchCenterY;


        setScale(newScale);


        setPosition({

          x:
            gesture.current.startPosX *
            scaleRatio +
            centerMoveX,

          y:
            gesture.current.startPosY *
            scaleRatio +
            centerMoveY

        });


        return;
      }


      if (
        e.touches.length === 1 &&
        scale > 1
      ) {

        const dx =
          e.touches[0].clientX -
          gesture.current.startX;


        const dy =
          e.touches[0].clientY -
          gesture.current.startY;


        setPosition({

          x:
            gesture.current.startPosX +
            dx,

          y:
            gesture.current.startPosY +
            dy

        });

      }

    };


  const handleZoomEnd =
    (e) => {

      if (
        e.touches.length === 0 &&
        scale <= 1.02
      ) {

        setScale(1);

        setPosition({
          x: 0,
          y: 0
        });

      }


      if (
        e.touches.length === 1
      ) {

        gesture.current.startX =
          e.touches[0].clientX;

        gesture.current.startY =
          e.touches[0].clientY;


        gesture.current.startPosX =
          position.x;

        gesture.current.startPosY =
          position.y;

      }

    };


  const share = async () => {

    const text =
      "Демонстрационный документ ";


    if (navigator.share) {

      try {

        await navigator.share({
          title:
            "Отправить Документ",
          text,
          url:
            "https://kaspi.kz"
        });

      } catch {}

    } else {

      await navigator.clipboard?.writeText(
        text +
        " https://kaspi.kz"
      );


      alert(
        "Текст для отправки скопирован."
      );

    }

  };


  const labels = [
    "ФИО",
    "ИИН",
    "Дата рождения",
    "Номер документа",
    "Дата выдачи",
    "Срок действия"
  ];


  return (
    <div className="screen id-screen">

      <BackHeader
        title="Удостоверение личности"
        onBack={() =>
          setPage("gov")
        }
      />


      <div className="segmented id-tabs">

        <button
          className={
            tab === "doc"
              ? "selected"
              : ""
          }
          onClick={() =>
            setTab("doc")
          }
        >
          Документ
        </button>


        <button
          className={
            tab === "details"
              ? "selected"
              : ""
          }
          onClick={() =>
            setTab("details")
          }
        >
          Реквизиты
        </button>

      </div>


      {tab === "doc" ? (

        <>

          <div className="id-card-area">

            {image ? (

              <div
                className="id-image-zoom"
                onTouchStart={
                  handleZoomStart
                }
                onTouchMove={
                  handleZoomMove
                }
                onTouchEnd={
                  handleZoomEnd
                }
                onTouchCancel={
                  handleZoomEnd
                }
              >

                <img
                  className="uploaded-card"
                  src={image}
                  alt="Загруженный демонстрационный документ"
                  draggable="false"
                  style={{
                    transform:
                      `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`
                  }}
                />

              </div>

            ) : (

              <label className="upload-placeholder">

                <Upload size={35}/>

                <b>
                  Загрузить изображение
                </b>

                <span>
                  Используйте тестовое изображение для демонстрации
                </span>

                <input
                  type="file"
                  accept="image/*"
                  onChange={onUpload}
                />

              </label>

            )}

          </div>


          <div className="id-actions">

            <button
              className="primary-blue"
              onClick={() =>
                setShowQr(true)
              }
            >
              <QrCode/>
              Предъявить документ
            </button>


            <button
              className="outline-blue"
              onClick={share}
            >
              <Share2/>
              Отправить документ
            </button>

          </div>

        </>

      ) : (

        <div className="details-list">

          {labels.map(
            (label) => (

              <label
                className="detail-field"
                key={label}
              >

                <span>
                  {label}
                </span>


                <div>

                  <input
                    value={
                      fields[label] ||
                      ""
                    }
                    onChange={(e) =>
                      setFields({
                        ...fields,
                        [label]:
                          e.target.value
                      })
                    }
                    placeholder="Тестовые данные"
                  />

                  <Copy size={21}/>

                </div>

              </label>

            )
          )}


          <button
            className="outline-blue details-share"
            onClick={share}
          >
            <Share2/>
            Отправить реквизиты
          </button>

        </div>

      )}


      {showQr && (

        <div
          className="modal"
          onClick={() =>
            setShowQr(false)
          }
        >

          <div
            className="qr-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <button
              className="modal-x"
              onClick={() =>
                setShowQr(false)
              }
            >
              <X/>
            </button>


            <QRCodeSVG
              value="https://kaspi.kz"
              size={240}
              includeMargin
            />


            <b>
              Покажите сотруднику
              <br/>
              или скажите код
            </b>


            <span>
              468497
            </span>

          </div>

        </div>

      )}


      <PrototypeBadge/>

    </div>
  );
}


/* =========================
   PIN SCREEN
   ========================= */

function PinScreen({ onUnlock }) {
  const [pin, setPin] = useState("");

  const pressNumber = (number) => {
    if (pin.length >= 4) return;

    const nextPin = pin + number;
    setPin(nextPin);

    if (nextPin.length === 4) {
      setTimeout(() => {
        onUnlock();
      }, 180);
    }
  };


  const [displayName, setDisplayName] = useState(
  () => localStorage.getItem("demo-display-name") || "Пользователь"
);

const [editingName, setEditingName] = useState(false);


const saveDisplayName = (value) => {
  const cleanValue = value.trim() || "Пользователь";

  setDisplayName(cleanValue);
  localStorage.setItem("demo-display-name", cleanValue);
  setEditingName(false);
};

  const removeNumber = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="pin-screen">

      <div className="pin-header">
        <button className="pin-header-button">
          <LogOut size={21} strokeWidth={1.8} />
        </button>

        <button className="pin-header-button">
          <X size={20} strokeWidth={1.8} />
        </button>
      </div>


      <div className="pin-profile">

        <div className="pin-avatar">
          <img
            src="/Kaspi-logo.png"
            alt=""
          />
        </div>

        <div className="pin-name-wrap">
  {editingName ? (
    <input
      className="pin-name-input"
      defaultValue={displayName}
      autoFocus
      maxLength={20}
      onBlur={(e) => saveDisplayName(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          saveDisplayName(e.currentTarget.value);
        }
      }}
    />
  ) : (
    <button
      className="pin-name"
      onClick={() => setEditingName(true)}
    >
      {displayName}
    </button>
  )}
</div>

      </div>


      <div className="pin-access">

        <div className="pin-access-title">
          Код доступа
        </div>

        <div className="pin-dots">
          {[0, 1, 2, 3].map((index) => (
            <span
              key={index}
              className={
                pin.length > index
                  ? "pin-dot filled"
                  : "pin-dot"
              }
            />
          ))}
        </div>

      </div>


      <div className="pin-keypad">

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <button
            key={number}
            className="pin-key"
            onClick={() => pressNumber(String(number))}
          >
            {number}
          </button>
        ))}


        <button
          className="pin-face"
          onClick={() => {}}
          aria-label="Face ID"
        >
          <ScanFace size={27} strokeWidth={1.5} />
        </button>


        <button
          className="pin-key"
          onClick={() => pressNumber("0")}
        >
          0
        </button>


        <button
          className="pin-delete"
          onClick={removeNumber}
          aria-label="Удалить"
        >
          ⌫
        </button>

      </div>


      <button className="pin-forgot">
        Забыли код доступа?
      </button>


      <div className="pin-prototype">
        .
      </div>

    </div>
  );
}


/* =========================
   APP
   ========================= */

function App() {
  const [page, setPage] =
    useState("home");


  const [unlocked, setUnlocked] =
    useState(() => {

      return (
        sessionStorage.getItem(
          "demo-unlocked"
        ) === "true"
      );

    });


  const unlockApp = () => {

    sessionStorage.setItem(
      "demo-unlocked",
      "true"
    );

    setUnlocked(true);

  };


  const content =
    page === "home"
      ? <Home setPage={setPage}/>

      : page === "bank"
        ? <Bank setPage={setPage}/>

        : page === "qr"
          ? <CameraPage setPage={setPage}/>

          : page === "gov"
            ? <Gov setPage={setPage}/>

            : page === "id"
              ? <IdDocument setPage={setPage}/>

              : <Home setPage={setPage}/>;


  if (!unlocked) {

    return (
      <div className="app">

        <PinScreen
          onUnlock={unlockApp}
        />

      </div>
    );

  }


  return (
    <div className="app">

      {content}


      {[
        "home",
        "gov"
      ].includes(page) && (

        <BottomNav
          page={
            page === "gov"
              ? "services"
              : page
          }
          setPage={setPage}
        />

      )}

    </div>
  );
}


createRoot(
  document.getElementById("root")
).render(
  <App/>
);