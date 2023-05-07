const url = "https://ddragon.leagueoflegends.com/cdn/13.9.1/img/profileicon/";
const ext = ".png";

for (let i = 0; i < 6000; i++) {
    setTimeout(function() {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url + i + ext;

        img.onload = function() {
            const canvas = document.createElement('canvas');
            canvas.width = this.naturalWidth;
            canvas.height = this.naturalHeight;

            const ctx = canvas.getContext('2d');
            ctx.drawImage(this, 0, 0);

            canvas.toBlob(function(blob) {
                saveAs(blob, 'image' + i + ext);
            })
        }

        img.onerror = function() {
            console.log('Image not found: ' + this.src);
        };
    }, i * 500);
}