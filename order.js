const orderForm = document.getElementById('orderForm');
const orderSummary = document.getElementById('orderSummary');

orderForm.addEventListener('submit', event => {
	event.preventDefault();

	// Get form values
	const chairQty = parseInt(orderForm.elements.chairQty.value);
	const tableQty = parseInt(orderForm.elements.tableQty.value);
	const sofaQty = parseInt(orderForm.elements.sofaQty.value);
	const bedQty = parseInt(orderForm.elements.bedQty.value);
	const shelfQty = parseInt(orderForm.elements.shelfQty.value);
	const cabinetQty = parseInt(orderForm.elements.cabinetQty.value);
	const deskQty = parseInt(orderForm.elements.deskQty.value);
	const dresserQty = parseInt(orderForm.elements.dresserQty.value);
	const bookcaseQty = parseInt(orderForm.elements.bookcaseQty.value);
	const couchQty = parseInt(orderForm.elements.couchQty.value);

	// Calculate total price
	const itemPrices = {
		chair: 25,
		table: 100,
		sofa: 300,
		bed: 800,
		shelf: 40,
		cabinet: 80,
		desk: 150,
		dresser: 200,
		bookcase: 75,
		couch: 500
	};

	const totalPrice = (chairQty * itemPrices.chair) + (tableQty * itemPrices.table) + (sofaQty * itemPrices.sofa) + 
	(bedQty * itemPrices.bed) + (shelfQty * itemPrices.sofa) + (shelfQty * itemPrices.shelf) + (cabinetQty * itemPrices.cabinet) + 
	(deskQty * itemPrices.desk) + (dresserQty * itemPrices.dresser) + (bookcaseQty * itemPrices.bookcase) + 
	(couchQty * itemPrices.couch);

	// Display order summary
	orderSummary.innerHTML = `
		<h2>Order Summary</h2>
		<p>Thank you for your order!</p>
		<table>
			<tr>
				<th>Item</th>
				<th>Quantity</th>
				<th>Price</th>
			</tr>
			<tr>
				<td>Chair</td>
				<td>${chairQty}</td>
				<td>$${(chairQty * itemPrices.chair).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Table</td>
				<td>${tableQty}</td>
				<td>$${(tableQty * itemPrices.table).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Sofa</td>
				<td>${sofaQty}</td>
				<td>${(sofaQty * itemPrices.sofa).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Bed</td>
				<td>${bedQty}</td>
				<td>${(bedQty * itemPrices.bed).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Shelf</td>
				<td>${shelfQty}</td>
				<td>${(shelfQty * itemPrices.shelf).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Cabinet</td>
				<td>${cabinetQty}</td>
				<td>${(cabinetQty * itemPrices.cabinet).toFixed(2)}</td>
			<tr>
				<td>Desk</td>
				<td>${deskQty}</td>
				<td>$${(deskQty * itemPrices.desk).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Dresser</td>
				<td>${dresserQty}</td>
				<td>$${(dresserQty * itemPrices.dresser).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Bookcase</td>
				<td>${bookcaseQty}</td>
				<td>$${(bookcaseQty * itemPrices.bookcase).toFixed(2)}</td>
			</tr>
			<tr>
				<td>Couch</td>
				<td>${couchQty}</td>
				<td>$${(couchQty * itemPrices.couch).toFixed(2)}</td>
			</tr>
			<tr>
				<th colspan="2">Total Price</th>
				<td>$${totalPrice.toFixed(2)}</td>
			</tr>
		</table>
	`;

	// Show order summary
	orderSummary.classList.remove('hidden');
});
