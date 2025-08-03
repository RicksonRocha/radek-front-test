"use client";

import { Title } from "@components/core/title";

import { Button } from "@components/core/button";
import { Card } from "@components/core/card";
import { Scrollbar } from "@components/core/scrollbar";
import { Table } from "@components/core/table";
import { Dialog } from "@components/core/dialog";
import { ArrowsRotate } from "@components/icons/arrows-rotate";
import { EditIcon } from "@components/icons/edit-item";
import { PlusIcon } from "@components/icons/plus";
import { SearchIcon } from "@components/icons/search";
import { TrashIcon } from "@components/icons/trash";
import * as styles from "./styles/central-page.css";
import { CentralPageProps } from "./types";
import { theme } from "@components/styles/theme/theme.css";

export const CentralsPageView = (props: CentralPageProps) => {
  const {
    page,
    handleSort,
    deleteId,
    setDeleteId,
    confirmDelete,
    modelsQuery,
    centralsQuery,
    isOpen,
    setIsOpen,
    TABLE_HEADS,
    handleEdit,
    MODELS_MAP,
    handleChangeRowsPerPage,
    handleNextPage,
    handlePreviousPage,
    sortedData,
    totalPages,
    noData,
    handleCreate,
    handleSubmit,
    register,
    onSubmit,
    errors,
    handleReset,
  } = props;

  if (centralsQuery.error) return <div>Erro ao carregar centrais</div>;

  return (
    <div className={styles.containerPage}>
      <Title.Root size="medium">
        <Title.Text>Lista de centrais</Title.Text>
      </Title.Root>
      <div>
        <Button startIcon={<PlusIcon customSize="lg" />} onClick={handleCreate}>
          Criar central
        </Button>
      </div>

      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex", alignItems: "start", gap: 8 }}>
            <div>
              <input
                type="text"
                {...register("search")}
                placeholder="Digite o nome ou modelo..."
                style={{ padding: 8, borderRadius: 8 }}
              />
              {errors?.search && (
                <p style={{ color: "red", fontSize: 12 }}>
                  {errors?.search.message}
                </p>
              )}
            </div>
            <Button type="submit" startIcon={<SearchIcon customSize="14" />}>
              Pesquisar
            </Button>
            <Button
              onClick={handleReset}
              startIcon={<ArrowsRotate customSize="12" />}
            >
              Limpar
            </Button>
          </div>
        </form>

        {noData && "Não há centrais cadastradas"}

        {centralsQuery.isLoading || modelsQuery.isLoading ? (
          <Table.Skeleton></Table.Skeleton>
        ) : (
          <>
            <Scrollbar>
              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    {TABLE_HEADS.map((th) => (
                      <Table.Head key={th.id}>{th.name}</Table.Head>
                    ))}
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {sortedData.map((central, index) => (
                    <Table.Row key={index}>
                      <Table.Data>{central.name}</Table.Data>
                      <Table.Data>{central.mac}</Table.Data>
                      <Table.Data>
                        {MODELS_MAP.get(central.modelId) as string}
                      </Table.Data>
                      <Table.Data
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          gap: 8,
                        }}
                      >
                        <Button
                          onClick={() => handleEdit(central)}
                          style={{ fontWeight: "bold" }}
                          startIcon={<EditIcon customSize="lg" />}
                        >
                          Editar
                        </Button>
                        <Button
                          style={{ fontWeight: "bold" }}
                          onClick={() => {
                            setDeleteId(central.id);
                            setIsOpen(true);
                          }}
                          startIcon={<TrashIcon customSize="lg" />}
                        >
                          Excluir
                        </Button>
                      </Table.Data>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Root>
            </Scrollbar>

            <Table.Pagination
              page={page}
              totalPages={totalPages}
              onPreviousPage={handlePreviousPage}
              onNextPage={handleNextPage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              onSort={handleSort}
            />
          </>
        )}
      </Card>

      <Dialog.Root open={isOpen}>
        <Dialog.Content>
          <Dialog.Title title="Confirma a exclusão deste item?" />
          <Dialog.Paragraph title="O dado será excluído permanentemente" />
          <Dialog.Actions>
            <Button
              onClick={() => setIsOpen(false)}
              style={{
                backgroundColor: theme.colors.secondarySurface,
              }}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => {
                if (deleteId) confirmDelete(deleteId);
              }}
              style={{ backgroundColor: theme.colors.alert }}
            >
              Excluir
            </Button>
          </Dialog.Actions>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  );
};
