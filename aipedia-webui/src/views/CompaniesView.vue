<script setup lang="ts">
import CatalogTable from '@/components/CatalogTable.vue'
import { companies } from '@/data/companies'

const columns = [
  { key: 'company', label: 'Company', type: 'brand' as const },
  { key: 'founded', label: 'Founded', type: 'founded' as const },
  { key: 'founders', label: 'Founders', type: 'multiline' as const },
  { key: 'headquarters', label: 'Headquarters' },
  { key: 'products', label: 'Products', type: 'multiline' as const },
  { key: 'employees', label: 'Number of employees' },
  { key: 'owners', label: 'Owners', type: 'multiline' as const },
]
</script>

<template>
  <CatalogTable
    title="Companies"
    description="AI companies and labs."
    :columns="columns"
    :rows="companies"
    initial-sort-key="company"
    initial-sort-dir="asc"
  />
</template>
