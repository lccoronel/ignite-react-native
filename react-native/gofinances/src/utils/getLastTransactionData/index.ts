import { TransactionDataProps } from '../../components/TransactionCard';

export function getLastTransactionDate(
  listTransactions: TransactionDataProps[],
  type: 'positive' | 'negative',
): string {
  const lastTransactions = Math.max.apply(
    Math,
    listTransactions
      .filter(transaction => transaction.type === type)
      .map(transaction => new Date(transaction.date).getTime()),
  );

  const lastTransactionsFormatted = Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }).format(new Date(lastTransactions));

  return lastTransactionsFormatted;
}
