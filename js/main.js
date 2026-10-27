(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });

  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  function showError(el, msg, focusEl) {
    el.textContent = msg; el.hidden = false;
    if (focusEl) focusEl.focus();
  }

  // Egg order form
  var order = document.getElementById('egg-order-form');
  if (order) {
    var qty = document.getElementById('quantity');
    var totalEl = document.getElementById('total');
    var totalField = document.getElementById('total-field');
    var dateInput = document.getElementById('pickup-date');
    var dateLabel = document.getElementById('date-label');
    var dateHint = document.getElementById('date-hint');
    var addrWrap = document.getElementById('address-wrap');
    var addr = document.getElementById('address');

    function clampQty() {
      var n = parseInt(qty.value, 10);
      if (isNaN(n) || n < 1) n = 1;
      if (n > 10) n = 10;
      qty.value = n;
      return n;
    }
    function update() {
      var sel = order.querySelector('input[name="egg-type"]:checked');
      var price = sel ? parseFloat(sel.dataset.price) : 0;
      var n = parseInt(qty.value, 10) || 0;
      var t = '$' + (price * Math.max(n, 0));
      totalEl.textContent = t; totalField.value = t;
    }
    order.querySelectorAll('[data-step]').forEach(function (b) {
      b.addEventListener('click', function () {
        qty.value = (parseInt(qty.value, 10) || 0) + parseInt(b.dataset.step, 10);
        clampQty(); update();
      });
    });
    qty.addEventListener('input', update);
    qty.addEventListener('change', function () { clampQty(); update(); });
    order.querySelectorAll('input[name="egg-type"]').forEach(function (r) { r.addEventListener('change', update); });

    order.querySelectorAll('input[name="fulfillment"]').forEach(function (r) {
      r.addEventListener('change', function () {
        var delivery = order.querySelector('input[name="fulfillment"]:checked').value !== 'Farm pickup';
        addrWrap.hidden = !delivery;
        addr.required = delivery;
        dateLabel.textContent = delivery ? 'Preferred delivery date' : 'Preferred pickup date';
        dateHint.hidden = delivery;
      });
    });

    var t = new Date(); t.setDate(t.getDate() + 1);
    var iso = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
    dateInput.min = iso;

    var err = document.getElementById('form-error');
    order.addEventListener('submit', function (e) {
      err.hidden = true;
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      if (!name.value.trim()) { e.preventDefault(); return showError(err, 'Please enter your name.', name); }
      if (!EMAIL_RE.test(email.value.trim())) { e.preventDefault(); return showError(err, 'Please enter a valid email address so we can confirm your order.', email); }
      if (!dateInput.value) { e.preventDefault(); return showError(err, 'Please choose a preferred date.', dateInput); }
      if (dateInput.value < iso) { e.preventDefault(); return showError(err, 'Please choose a date starting tomorrow.', dateInput); }
      if (addr.required && !addr.value.trim()) { e.preventDefault(); return showError(err, 'Please enter a delivery address.', addr); }
      clampQty(); update();
    });
    update();
  }

  // Contact form
  var contact = document.getElementById('contact-form');
  if (contact) {
    var topic = document.getElementById('topic');
    var subject = document.getElementById('subject-field');
    var params = new URLSearchParams(location.search);
    var want = params.get('topic');
    if (want) {
      var match = Array.prototype.find.call(topic.options, function (o) { return o.text.toLowerCase() === want.toLowerCase(); });
      if (!match) { match = new Option(want, want); topic.add(match); }
      topic.value = match.value;
    }
    var cerr = document.getElementById('contact-error');
    contact.addEventListener('submit', function (e) {
      cerr.hidden = true;
      var n = document.getElementById('c-name'), em = document.getElementById('c-email'), m = document.getElementById('message');
      if (!n.value.trim()) { e.preventDefault(); return showError(cerr, 'Please enter your name.', n); }
      if (!EMAIL_RE.test(em.value.trim())) { e.preventDefault(); return showError(cerr, 'Please enter a valid email address so we can reply.', em); }
      if (!m.value.trim()) { e.preventDefault(); return showError(cerr, 'Please write a short message.', m); }
      subject.value = 'Website inquiry: ' + topic.value;
    });
  }

  // Thank-you page wording
  var tt = document.getElementById('thanks-title');
  if (tt) {
    var type = new URLSearchParams(location.search).get('type');
    if (type === 'order') {
      tt.textContent = 'Thank you for your egg order';
      document.getElementById('thanks-body').textContent = "We'll contact you within 24 hours to confirm your pickup time. Check your email for a confirmation.";
    } else if (type === 'message') {
      tt.textContent = 'Thanks for reaching out';
      document.getElementById('thanks-body').textContent = "We'll reply within 24 hours.";
    }
  }
})();
