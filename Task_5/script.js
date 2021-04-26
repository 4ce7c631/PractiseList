hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];
rainbow = destination.concat(native,hero);
rainbow.reverse();
rainbow[0] = `Richard`;
rainbow[4] = `Vain`;
memory = rainbow.slice(3,5);
rainbow.splice(3,4,`Gave`,`Battle`);

for(i = 0; i < memory.length; i++){
	rainbow.push(memory[i]);
}

let circleColors = [`red`,`orange`,`yellow`,`green`,`DodgerBlue`,`blue`,`purple`]

rainbow.forEach((rainbow,index)=> document.write(`<ul><li class="circle" style="background-color: ${circleColors[index]}"></li><li><div>${rainbow}</div></li></ul>`));