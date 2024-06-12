document.addEventListener('DOMContentLoaded', function() {
    const parties = document.querySelectorAll('.parti');
    const tooltip = document.getElementById('tooltip');

    parties.forEach(parti => {
        parti.addEventListener('mouseover', function() {
            tooltip.textContent = parti.dataset.parti;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = '1';
        });

        parti.addEventListener('mousemove', function(e) {
            tooltip.style.left = e.pageX + 15 + 'px';
           
            tooltip.style.top = e.pageY + 15 + 'px';
        });

        parti.addEventListener('mouseout', function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = '0';
        });

        parti.addEventListener('click', function() {
            const page = parti.id === 'parti-centre' ? 'parti_renouveau.html' :
                         parti.id === 'parti-droit' ? 'union_republicaine.html' :
                         'parti_gauche.html';
            window.location.href = page;
        });
    });
});
