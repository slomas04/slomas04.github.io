const bayerFrag = `

// Grafted from https://www.shadertoy.com/view/WstXR8

mat4 bayerIndex = mat4(
    vec4(00.0/16.0, 12.0/16.0, 03.0/16.0, 15.0/16.0),
    vec4(08.0/16.0, 04.0/16.0, 11.0/16.0, 07.0/16.0),
    vec4(02.0/16.0, 14.0/16.0, 01.0/16.0, 13.0/16.0),
    vec4(10.0/16.0, 06.0/16.0, 09.0/16.0, 05.0/16.0));

void mainImage(out vec4 fragColor,in vec2 fragCoord)
	{
    // sample the texture
    vec2 uv = fragCoord/iResolution.xy;
    vec4 col = texture(iChannel0,uv);
    
    // gamma correction
    col = vec4(pow(col.rgb,vec3(2.2)) - 0.004,col.a);
    
    // find bayer matrix entry based on fragment position
    float bayerValue = bayerIndex[int(fragCoord.x) % 4][int(fragCoord.y) % 4];

    // output
    fragColor = vec4(
        step(bayerValue,col.r),
        step(bayerValue,col.g),
        step(bayerValue,col.b),
        col.a);

	}
`;