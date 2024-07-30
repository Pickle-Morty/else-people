import { Section, Cell, Image, List, Button } from "@telegram-apps/telegram-ui";
import type { FC } from "react";

import { Link } from "@/components/Link/Link.tsx";

import tonSvg from "./ton.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export const IndexPage: FC = () => {
  const { t } = useTranslation();
  const changeLng = (lng: string) => {
    i18next.changeLanguage(lng, (err, t) => {
      if (err) return console.log("something went wrong loading", err);
      t("key");
    });
  };

  return (
    <List>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="flex gap-3 mb-5 ">
        <Button onClick={() => changeLng("ru")}>Русский</Button>
        <Button onClick={() => changeLng("en")}>English</Button>
      </div>
      <p className="pb-2">{t("else_text1")}</p>
      <Section
        header="Features"
        footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
      >
        <Link to="/ton-connect">
          <Cell
            before={
              <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
            }
            subtitle="Connect your TON wallet"
          >
            TON Connect
          </Cell>
        </Link>
      </Section>
    </List>
  );
};
