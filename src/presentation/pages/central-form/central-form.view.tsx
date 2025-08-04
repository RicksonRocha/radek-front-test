"use client";

import { Title } from "@components/core/title";

import { Button } from "@components/core/button";
import { Card } from "@components/core/card";
import { ChevronLeftIcon } from "@components/icons/chevron-left";
import { theme } from "@components/styles/theme/theme.css";
import * as styles from "./styles/central-form.css";
import { CentralFormViewProps } from "./types";
import { FormError } from "@components/core/form/form-error";

export const CentralFormViewPage = (props: CentralFormViewProps) => {
  const { centralId, handleBack, onSubmit, formMethods, modelsQuery } = props;
  const {
    handleSubmit,
    register,
    formState: { errors, isDirty, isSubmitting },
  } = formMethods;
  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>{centralId ? "Editar" : "Criar"} central</Title.Text>
      </Title.Root>

      <div>
        <Button
          onClick={handleBack}
          startIcon={<ChevronLeftIcon customSize="lg" />}
        >
          Voltar
        </Button>
      </div>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formStyles}>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            {...register("name")}
            className={styles.formInputStyles}
          />
          {errors.name && <FormError>{errors.name.message}</FormError>}

          <label htmlFor="mac">MAC:</label>
          <input
            id="mac"
            {...register("mac")}
            placeholder="Ex: 01:23:45:67:89:AB"
            className={styles.formInputStyles}
          />
          {errors.mac && <FormError>{errors.mac.message}</FormError>}

          <label htmlFor="modelId">Modelo:</label>
          <select
            id="modelId"
            {...register("modelId", { valueAsNumber: true })}
            className={styles.formInputStyles}
          >
            <option value={0}>Selecione o modelo</option>
            {modelsQuery.data?.data.map((model) => (
              <option key={model.id} value={model.id}>
                {model.name}
              </option>
            ))}
          </select>
          {errors.modelId && <FormError>{errors.modelId.message}</FormError>}

          <div>
            <Button
              type="submit"
              disabled={isSubmitting || !isDirty}
              style={{
                fontWeight: "bold",
                cursor: !isDirty ? "not-allowed" : "pointer",
              }}
            >
              Salvar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
