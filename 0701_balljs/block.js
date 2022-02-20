export class Block {
    constructor(width, height, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // 공을 추적하기 위함
        this.maxX = width + x;
        this.maxY = height + y;
    }

    draw(ctx) {
        const xGap = 80;
        const yGap = 60;

        // 이 색깔로 채우겠다
        ctx.fillStyle = '#ff384e';
        // 그리기 시작
        ctx.beginPath();
        // rectangle(직사각형)
        ctx.rect(this.x, this.y, this.width, this.height);
        // 색을 채움
        ctx.fill();

        // 아래 그림자[사각형은 3개의 lineTo가 있어야 함]
        ctx.fillStyle = '#190f3a';
        ctx.beginPath();
        // 펜을 지정된 좌표로 옮김
        ctx.moveTo(this.maxX, this.maxY);
        // moveTo를 기준으로 지정된 좌표까지 그림 오른쪽
        ctx.lineTo(this.maxX - xGap, this.maxY + yGap);
        // 왼쪽
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        // 아래
        ctx.lineTo(this.x, this.maxY);
        ctx.fill();

        ctx.fillStyle = '#9d0919';
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x, this.maxY);
        ctx.lineTo(this.x - xGap, this.maxY + yGap);
        ctx.lineTo(this.x - xGap, this.maxY + yGap - this.height);
        ctx.fill();
    }
}