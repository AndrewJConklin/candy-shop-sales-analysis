
function getTotalItemSales (sales, Id) {
    return sales.filter(sale => sale.itemId === Id)
    .map(sortedSale => sortedSale.quantity)
    .reduce((sum, number) => {
        return sum + number
    }, 0)
}

function addTotalSalesToItems (sales, itemList) {
    return itemList.map(item => {
        return {
            ...item, 
            quantity: getTotalItemSales (sales, item.id)
        }
    })
}

function addTotalValueToItems (sales, itemList) {
    return addTotalSalesToItems (sales, itemList).map(item => {
        return {
            ...item,
            totalValue: (item.price * item.quantity).toFixed(2)
        }
    })
}

module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
