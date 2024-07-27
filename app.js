function moveLiftToFloor(floor) {
    const lift = document.querySelector('.lift');
    let transformValue;

    if (floor === 1) {
        transformValue = 'translateY(0px)';
    } else if (floor === 2) {
        transformValue = 'translateY(-153px)';
    } else if (floor === 3) {
        transformValue = 'translateY(-308px)';
    } else if (floor === 4) {
        transformValue = 'translateY(-463px)';
    } else {
        transformValue = 'translateY(0px)';
    }

    lift.style.transform = transformValue;
}
