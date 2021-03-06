import { DataTableTranslations } from './data-table-translations.type';

export const defaultTranslations: DataTableTranslations = {
  headerReload: 'reload {title} table',
  headerColumnSelector: 'column selector - adds or removes columns from {title} table',
  headerColumnSelectorAdded: '{column_name} added to {title} table',
  headerColumnSelectorRemoved: '{column_name} removed from {title} table',
  indexColumn: 'index',
  selectColumn: 'select',
  selectRow: 'select {cell_content}',
  selectAllRows: 'select all rows',
  expandColumn: 'expand',
  expandRow: 'expand {cell_content}',
  sortedAscending: '{title} table sorted by {header} ascending',
  sortedDescending: '{title} table sorted by {header} descending',
  sortAscending: 'activate to sort ascending',
  sortDescending: 'activate to sort descending',
  paginationLimit: 'Limit',
  paginationText: 'Results: {from} to {to} of {total}',
  paginationTotalPages: 'of',
  firstPage: 'first page',
  prevPage: 'previous page',
  pageNumberLabel: 'Page',
  pageNumber: 'page number',
  pageNumberNofM: '({N} of {M})',
  nextPage: 'next page',
  lastPage: 'last page',
  loadingText: '{title} table is loading',
  loadedText: '{title} table loaded',
  addFilter: 'Add filter',
  searchField: 'Search Field',
  selectedValueRequired: 'You must select a value',
  validDateRequired: 'You must enter valid date',
  valueRequired: 'You must enter a value',
  numericValueRequired: 'You must enter a numeric value',
  apply: 'Apply',
  value: 'Value',
  date: 'Date',
  not: 'Not',
  filterOperators: {
    'lt': '<',
    'gt': '>',
    'lte': '<=',
    'gte': '>=',
    'eq': '=',
    'ne': 'not equal to',
    'contains': 'contains',
    'not_contains': 'not contains',
    'starts': 'starts with',
    'ends': 'ends with',
    'empty': 'is empty',
    'true': 'true',
    'false': 'false'
  }
};
