export const blueNoiseFrag = `
    // grafted from https://www.shadertoy.com/view/ds2fz3

    #include <common>

    #define SHADES 12.0
    #define SCALE 4.0
    #define TEMPORAL 2.0

    uniform vec3 iResolution;
    uniform vec3 iChannelResolution[4];
    uniform float iTime;
    uniform sampler2D iChannel0; // Video Texture
    uniform sampler2D iChannel1; // Noise Texture

    void mainImage( out vec4 fragColor, in vec2 fragCoord){
        vec2 frag  = fragCoord;
        vec2 coord = floor(frag/SCALE)*SCALE;

        // Normalise Pixel Coords
        vec2 uv = coord/iResolution.xy;

        vec4 tex = texture(iChannel0, uv);
        vec2 shift = floor(cos(iTime*vec2(5,9))*1e4)*TEMPORAL;
        vec2 tuv = (coord/SCALE+shift)/iChannelResolution[1].xy;
        float dither = texture(iChannel1, tuv).r ;

        vec4 col = floor(tex*SHADES+dither)/SHADES;
        fragColor = col;

    }

    void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
    }
`;