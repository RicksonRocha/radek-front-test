import { Title } from "@components/core/title";

import * as styles from "./styles/centrais-page.css";

export const CentraisPage = () => {
  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Lista de centrais</Title.Text>
      </Title.Root>
    </div>
  );
};
