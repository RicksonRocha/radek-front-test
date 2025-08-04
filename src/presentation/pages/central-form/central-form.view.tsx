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
  const { centralId, handleBack, onSubmit, formMethods, modelsQuery, style } =
    props;
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            maxWidth: "50%",
            minWidth: "100",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: 24,
            borderRadius: 12,
            backgroundColor: theme.colors.success,
          }}
        >
          <label>Nome:</label>
          <input {...register("name")} style={style.input} />
          {errors.name && <FormError>{errors.name.message}</FormError>}

          <label>MAC:</label>
          <input
            {...register("mac")}
            placeholder="Ex: 01:23:45:67:89:AB"
            style={style.input}
          />
          {errors.mac && <FormError>{errors.mac.message}</FormError>}

          <label>Modelo:</label>
          <select
            {...register("modelId", { valueAsNumber: true })}
            style={style.input}
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
