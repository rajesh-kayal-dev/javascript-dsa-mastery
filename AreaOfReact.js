function AreaOfRactangle(l, w) {
    if(l <= 0) throw new RangeError("Length shuld be a positive number");

    if(w <= 0) throw new RangeError("Width shuld be a positive number");


    const area = l * w;
    console.log(area)
}

AreaOfRactangle(1.2, 4)
AreaOfRactangle(1, 0)
AreaOfRactangle(-1, 4)
AreaOfRactangle(1, -4)