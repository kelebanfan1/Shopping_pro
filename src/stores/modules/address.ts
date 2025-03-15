/* 收获地址 */

import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore('address', () => {
  const selectAddress = ref<AddressItem>()

  const changeSelectAddress = (val: AddressItem) => {
    selectAddress.value = val
  }

  return {
    selectAddress,
    changeSelectAddress,
  }
})
